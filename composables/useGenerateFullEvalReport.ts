import generateID from "@/utilities/generateID";
import { useStorage } from "@vueuse/core";
import type IEvalScore from "@/interfaces/IEvalScore";
import { useUser } from "./useUser";
import LocalStorageKeys from "@/constants/LocalStorageKeys";


const useGenerateFullReport = (currentQuestion: number , evaluationScores:Array<IEvalScore> ) => {


    const  user = useUser()
    const selectedCoMentors: any = useProcessLocalStorage().retrieve(LocalStorageKeys.SELECTED_COMENTORS);
    const mentee: any = useProcessLocalStorage().retrieve(LocalStorageKeys.EVALUATED_MENTEE);

    const evaluator = {
      id: user.profile.value._id,
      firstname: user.profile.value.firstname,
      lastname: user.profile.value.lastname,
    }

    const doc = {
      _id: generateID(),
      evaluator: evaluator,
      selectedCoMentors: selectedCoMentors,
      mentee: mentee,
      district: useStorage(LocalStorageKeys.DISTRICT,'').value,
      searchIndex: user.profile.value.searchIndex,
      dateSaved: Date.now(),
      status: "",
      lastQuestion: currentQuestion,
      scores: evaluationScores,
    };


    return doc;

}

export default useGenerateFullReport;