import pouchDBConnect from "@/utilities/pouchDbConnect";
import generateID from "@/utilities/generateID";
import firstUpperCase from "@/utilities/firstUpperCase";
import type IMasterUser from "@/interfaces/IMasterUser";
import type ICreateUser from "@/interfaces/ICreateUser";
import type IUpdateUser from "@/interfaces/IUpdateUser";
import DatabaseNames from "@/constants/DatabaseNames";
import Routes from "@/constants/Routes";
import LocalStorageKeys from "@/constants/LocalStorageKeys";

const db = pouchDBConnect(DatabaseNames.COMENTORS);
const user = useUser();

type ICoMentor = Pick<IMasterUser, "_id" | "_rev" | "firstname" | "lastname" | "gender" | "profession">
type ICreateCoMentor = Omit<ICreateUser, "terms" | "password" | "userName">
type IUpdateCoMentor = Omit<IUpdateUser, "terms" | "password" | "userName" | "facility">

export const useCoMentorsStore = defineStore("comentors", () => {
  const comentors = ref();
  const comentor = ref();
  const comentorError = ref();
  const comentorUpdateError = ref();

  //fetch all comentors in db
  const fetchCoMentors = async (): Promise<Array<ICoMentor> | void> => {
    const dbComentors = await db.allDocs({ include_docs: true }).then((response: { rows: string | any[] }) => {
      let vm = [];
      for (var i = 0; i < response.rows.length; i++) {
        vm.push(response.rows[i].doc);
      }

      let newArray = vm.filter(function (el) {
        return el.firstname != undefined;
      });

      return newArray;
    })
      .catch(function (err: Error) {
        console.error("fetch comentors error", err);
      });

    comentors.value = dbComentors;

    return dbComentors;
  };

  // fetch a comentor

  const fetchCoMentor = async (comentorID: string): Promise<ICoMentor | Error> => {
    const dbComentor = db.get(comentorID).then((response: ICoMentor) => {
      return response;
    }).catch(function (err: Error) {
      console.error("fetch comentor error", err);
      comentorError.value = err.message;
      return err;
    });

    comentor.value = dbComentor;

    return dbComentor;
  };

  //Create new Comentor
  const createCoMentor = async (coMentorData: ICreateCoMentor): Promise<Boolean | String> => {
    const coMentorObject = {
      _id: generateID(),
      firstname: firstUpperCase(coMentorData.firstName),
      lastname: firstUpperCase(coMentorData.lastName),
      gender: coMentorData.gender,
      profession: firstUpperCase(coMentorData.profession),
      createdAt: Date.now(),
      createdBy: user.profile.value.firstname + ' ' + user.profile.value.lastname
    };

    const createStatus = await db.put(coMentorObject).then((response: { ok: boolean }) => {
        if (response.ok === true) {
          useReplicateToCouchDB(DatabaseNames.COMENTORS);
        }
        return response.ok;
      }).catch((error: Error) => {
        return error.message
      });

    return createStatus;
  };

  //update co-Mentor
  const updateCoMentor = async (updatedCoMentorData: IUpdateCoMentor): Promise<Boolean | String> => {

    const updatedComentor = {
      _id: updatedCoMentorData._id,
      _rev: updatedCoMentorData._rev,
      firstname: firstUpperCase(updatedCoMentorData.firstName),
      lastname: firstUpperCase(updatedCoMentorData.lastName),
      gender: updatedCoMentorData.gender,
      profession: firstUpperCase(updatedCoMentorData.profession),
      createdAt: updatedCoMentorData.createdAt,
      createdBy: updatedCoMentorData.createdBy,
      updatedAt: Date.now(),
      updatedBy: user.profile.value.firstname + ' ' + user.profile.value.lastname
    }

    return await db.put(updatedComentor).then((response: { ok: boolean }) => {
      if (response.ok === true) {
        useReplicateToCouchDB(DatabaseNames.COMENTORS);
      }
      return response.ok;

    }).catch((error: Error) => {
      return error.message
    });

  }

  //save going

  const saveGoingCoMentors = async (selectedData: Array<String>) => {
    let goingArr: Array<Object> = [];

    selectedData.forEach((resp: String) => {
      goingArr.push({
        id: resp,
      });
    });

    const result = goingArr.map((obj: any) => {
      const detail = comentors.value.find(
        (comentor: { _id: any }) => comentor._id === obj.id
      );

      obj.name = detail ? detail.firstname : null;
      obj.surname = detail ? detail.lastname : null;
      obj.gender = detail ? detail.gender : null;
      obj.profession = detail ? detail.profession : null;

      return obj;
    });

    useProcessLocalStorage().store(LocalStorageKeys.SELECTED_COMENTORS, result)

    await navigateTo(Routes.DISTRICTS);
  };

  //delete Co-Mentor

  const deleteCoMentor = async (comentorID: string, comentorRev: string) => {
    return await db.remove(comentorID, comentorRev).then(async (resp) => {
      useReplicateToCouchDB(DatabaseNames.COMENTORS);
      console.log(resp);
      if (resp.ok === true) {
        await navigateTo(Routes.COMENTORS);
      }
      return resp.ok;
    });
  };

  return {
    comentors,
    fetchCoMentors,
    fetchCoMentor,
    updateCoMentor,
    createCoMentor,
    saveGoingCoMentors,
    deleteCoMentor,
  };
});
