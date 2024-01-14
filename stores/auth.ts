import pouchDBConnect from "@/utilities/pouchDbConnect";
import type ICreateUser from "@/interfaces/ICreateUser";
import generateID from "@/utilities/generateID";
import useHash from "@/composables/useHash";
import { bcryptVerify } from "hash-wasm";
import type IMasterUser from "@/interfaces/IMasterUser";
import DatabaseNames from "@/constants/DatabaseNames";
import Routes from "@/constants/Routes";
import LocalStorageKeys from "~/constants/LocalStorageKeys";

const db = pouchDBConnect(DatabaseNames.USERS);

export const useAuthStore = defineStore("auth", () => {
  const user = ref("");
  const isLoggedIn = ref();
  const isRegistered = ref(false);
  const isAuthenticated = ref(false)

  //create a new user

  const registerUser = async (userRegData: ICreateUser) => {
    const config = useRuntimeConfig();

    const remoteDB = pouchDBConnect(`${config.public.couchDBUrl}/${DatabaseNames.USERS}`);

    const CreateUserData = {
      _id: generateID(),
      firstname: userRegData.firstName,
      lastname: userRegData.lastName,
      username: userRegData.userName,
      password: await useHash(userRegData.password),
      terms: userRegData.terms,
    };

    db.put(CreateUserData).then(async () => {
      await navigateTo(Routes.INDEX);
    }).then(() => {
      remoteDB.logIn(config.public.couchDBUsername, config.public.couchDBPassword).then(() => {
        db.sync(remoteDB, {
          live: true,
          retry: true,
        }).on("change", (change: any) => {
          console.log("something changed", change);
        });
      });
    }).catch((error: Error) => {
      console.error("register failed", error);
    });

    isRegistered.value = true;
  };

  /// sign in
  const signIn = async (userData: Pick<IMasterUser, "username" | "password">): Promise<boolean | void> => {

    db.createIndex({ index: { fields: ["username"] } });

    const userAuthenticated = await db.find({
      selector: {
        username: userData.username,
      },
    }).then(async function (response: { docs: { [x: string]: any; password: any; }[]; }) {

      const isValid = await bcryptVerify({
        password: userData.password,
        hash: response.docs[0].password,
      });

      if (isValid) {

        const profileData = {
          id: response.docs[0]._id,
          firstname: response.docs[0].firstname,
          lastname: response.docs[0].lastname,
          username: response.docs[0].username,
          searchIndex: (response.docs[0].firstname.concat(response.docs[0].lastname)).toLowerCase()
        }

        useProcessLocalStorage().store(LocalStorageKeys.PROFILE, profileData)

      }

      return isValid;
    })
      .catch(function (err: any) {
        console.log(err);
      });



    if (userAuthenticated) {
      const token = useCookie('token')
      token.value = generateID()
      isLoggedIn.value = userAuthenticated;
      isAuthenticated.value = userAuthenticated;

      await navigateTo(Routes.DASHBOARD);

    } else {

      await navigateTo(Routes.INDEX);

      alert('Wrong Credentials. Please try again')
    }

    return userAuthenticated;
  };

  // signout
  const signOut = async () => {
    localStorage.clear()
    isAuthenticated.value = false;
    isLoggedIn.value = false;

    const token = useCookie('token');
    token.value = null;
    await navigateTo(Routes.INDEX);
  }

  return { user, registerUser, signIn, signOut, isRegistered, isLoggedIn, isAuthenticated };
});
