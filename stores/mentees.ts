import pouchDBConnect from "@/utilities/pouchDbConnect";
import generateID from "@/utilities/generateID";
import LocalStorageKeys from "@/constants/LocalStorageKeys";
import DatabaseNames from "@/constants/DatabaseNames";
import type ICreateUser from "@/interfaces/ICreateUser";
import type IUpdateUser from "@/interfaces/IUpdateUser";
import Routes from "@/constants/Routes";

const db = pouchDBConnect(DatabaseNames.MENTEES);
const facility = localStorage.getItem(LocalStorageKeys.SELECTED_FACILITY);

type ICreateMentee = Omit<ICreateUser, "terms" | "password" | "userName">
type IUpdateMentee = Omit<IUpdateUser, "terms" | "password" | "userName">

export const useMenteeStore = defineStore("mentees", () => {
  const mentees = ref();

  //fetch all users

  const fetchAllMentees = async () => {
    return await db
      .allDocs({ include_docs: true })
      .then(async (response) => {
        let vm: any[] = [];
        let facilityFiltered: any[] = [];

        for (var i = 0; i < response.rows.length; i++) {
          vm.push(response.rows[i].doc);
        }

  
        facilityFiltered = vm.filter(function (value) {
          return value.facility === facility;
        });

        mentees.value = facilityFiltered;

        return facilityFiltered;
      })
      .catch((error: Error) => {
        console.error("fetch mentees error:", error);
      });
  };

  //

  //Create new Mentee
  const createMentee = async (menteeData: ICreateMentee): Promise<any> => {
    const menteeObject = {
      _id: generateID(),
      firstname: menteeData.firstName,
      lastname: menteeData.lastName,
      gender: menteeData.gender,
      facility: facility,
      profession: menteeData.profession,
    };

    const createStatus = await db
      .put(menteeObject)
      .then((response: { ok: boolean }) => {
        console.log("Create Mentee", response);
        if (response.ok === true) {
          useReplicateToCouchDB(DatabaseNames.MENTEES);
        }
        return response;
      })
      .catch((error: any) => {
        console.log("Error creating Mentee", error);
      });

    return createStatus;
  };

  //update Mentee
  const updateMentee = async (updatedMenteeData: IUpdateMentee): Promise<Boolean|String> => {

    const updatedMentee = {
      _id: updatedMenteeData._id,
      _rev: updatedMenteeData._rev,
      firstname: updatedMenteeData.firstName,
      lastname: updatedMenteeData.lastName,
      facility: updatedMenteeData.facility,
      gender: updatedMenteeData.gender,
      profession: updatedMenteeData.profession,
      updatedAt:  Date.now()
    }

   return await db.put(updatedMentee).then((response:{ ok: boolean })=>{
      if (response.ok === true) {
        useReplicateToCouchDB(DatabaseNames.MENTEES);
      }
      return response.ok;

    }).catch((error: Error) => {
      console.log("Error creating Menteer", error);
      
      return error.message
    });

  }

  //save mentee being interviewed
  const saveEvalMentee = async (selectedId: string) => {
    const result = mentees.value.find(
      (mentee: { _id: any }) => mentee._id === selectedId
    );

    useProcessLocalStorage().store(LocalStorageKeys.EVALUATED_MENTEE, result)

     await navigateTo(Routes.PREVIEW)
  };

  //delette Mentee
  const deleteMentee = async (menteeID: string, menteeRev: string) => {
    return await db.remove(menteeID, menteeRev).then(async (resp) => {
      useReplicateToCouchDB(DatabaseNames.MENTEES);
      console.log(resp);
      if (resp.ok === true) {
        await navigateTo(Routes.MENTEES);
      }
      return resp.ok;
    });
  };


  return { mentees, fetchAllMentees, createMentee, updateMentee, saveEvalMentee, deleteMentee};
});
