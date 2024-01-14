import { useLocalStorage, useStorage, type RemovableRef } from "@vueuse/core";
import type IEvalScore from "@/interfaces/IEvalScore";
import pouchDBConnect from "@/utilities/pouchDbConnect";
import type IFinalEvaluation from "@/interfaces/IFinalEvaluation";
import LocalStorageKeys from "@/constants/LocalStorageKeys";
import DatabaseNames from "@/constants/DatabaseNames";

const dbEvals = pouchDBConnect(DatabaseNames.COMPLETED_EVALUTATIONS);
const dbIncompleteEvals = pouchDBConnect(DatabaseNames.INCOMPLETE_EVALUATIONS);

export const useEvalDataStore = defineStore("evaluations", () => {
  const vm: IEvalScore[] = [];

  let vn: any;

  const vo: any[]  = []

  const evaluationScores: RemovableRef<Array<IEvalScore>> = useStorage(LocalStorageKeys.EVALUATION_SCORES, vm);

  const menteeEvalReportData = useStorage(LocalStorageKeys.MENTEE_EVALUATION_REPORT_DATA, vn);

  const allEvaluationScores = ref()

  // fetch evals

  const fetchEvaluationScores = async (dbName: string): Promise<Array<IFinalEvaluation> | any > => {

    const user = useUser();

    let db: PouchDB.Database<any>;

   if(dbName === DatabaseNames.COMPLETED_EVALUTATIONS ) {

     db  = dbEvals;

   } else {
    db = dbIncompleteEvals

   }

    const evals = await db.allDocs({ include_docs: true }).then((response) => {
      let vm: any[] = [];
      for (var i = 0; i < response.rows.length; i++) {
        vm.push(response.rows[i].doc);
      }

      let newArray = vm.filter(function (el) {
        return el.searchIndex == user.profile.value.searchIndex;
      });

      // console.log('all scores' , newArray)

      return newArray;

    }).catch((err: Error) => {
      console.error('fetch all scores error', err )
      // return ['Could not fetch evaluation scores, please try again or contact the administrator']
    })

    allEvaluationScores.value = evals

    return evals

  }


  //fetch all incomplete evaluations

  const fetchMenteeIncompleteEval = async (docId: string) => {

   const menteeData = await dbIncompleteEvals.get(docId).then((response) => {
    return response
   }).then((res) => {

        evaluationScores.value = res.scores
         
        useProcessLocalStorage().store(LocalStorageKeys.SELECTED_COMENTORS,res.selectedCoMentors)
        useProcessLocalStorage().store(LocalStorageKeys.EVALUATED_MENTEE,res.mentee)
        useProcessLocalStorage().store(LocalStorageKeys.EVALUATOR, res.evaluator)
        localStorage.setItem(LocalStorageKeys.DISTRICT, res.district)
        localStorage.setItem(LocalStorageKeys.SEARCH_INDEX, res.searchIndex)

        return res

   }).then((res) => {

    let section = ''
    let chapter = ''

    if(res.lastQuestion <= 7  ){
      section = 'Introduction and Initial Evaluation'
      chapter = 'Knowledge'
    } else if(res.lastQuestion >= 8 && res.lastQuestion <= 10) { 
      section = 'Introduction and Initial Evaluation'
      chapter = 'Acquired Skill'
    } else if(res.lastQuestion >= 11 && res.lastQuestion <= 13) {
      section = 'Introduction and Initial Evaluation'
      chapter = 'Behaviour'
    } else if(res.lastQuestion >= 14  && res.lastQuestion <= 22) {
      section = 'Management of Diabetes Mellitus'
      chapter = 'Knowledge'
    }else if(res.lastQuestion >= 23 && res.lastQuestion <= 28) {
      section = 'Management of Diabetes Mellitus'
      chapter = 'Acquired Skill'
    }else {
      section = 'Management of Diabetes Mellitus'
      chapter = 'Behaviour'
    }

     navigateTo(`/evaluation/${section}/${chapter}/${res.lastQuestion + 1}`)

     return res

   }
   ).then((resp) => {

    deleteEvaluation(resp._id, resp._rev, DatabaseNames.INCOMPLETE_EVALUATIONS)

   }).catch((err)=>{
    console.error(err)
   })


   console.log('incomplete evaluation for a mentee', menteeData)

  }

  //store evals

  const storeScore = (score: IEvalScore) => {
    let newScore = null;
    let i = null;


    const savedScores = evaluationScores.value;

    const search = (obj: IEvalScore) => obj.evalItem === score.evalItem;

    i = savedScores.findIndex(search);

    // check if score is already exists in master store

    if (i != -1) {
      //if it exists in master store, remove it
      evaluationScores.value.splice(i, 1);

      //then insert the new one in master store

      newScore = evaluationScores.value.push(score);

    } else {
      //if not jusr push
      newScore = evaluationScores.value.push(score);
    }

    ///
    if (evaluationScores.value.length === 29) {

      let doc = useGenerateFullEvalReport(29, evaluationScores.value)

      const updatedDoc = { ...doc, status: "complete", scoreStats: useScoreStats(evaluationScores.value) }

      menteeEvalReportData.value = updatedDoc;

    }

    ///
    return newScore;
  };

  const saveEvaluations = async (currentQuestion: number) => {

    let saveEval: PouchDB.Core.Response | void | any;

    let doc = useGenerateFullEvalReport(currentQuestion, evaluationScores.value)

    console.log('doc saved', doc)

    if (currentQuestion === 29) {

      // doc.status = "complete";

      const updatedDoc = { ...doc, status: "complete", scoreStats: useScoreStats(evaluationScores.value) }

      saveEval = await dbEvals.put(updatedDoc).then(async (response) => {

        if (response.ok === true) {

          menteeEvalReportData.value = null;

          localStorage.setItem(LocalStorageKeys.SELECTED_COMENTORS, '')
          localStorage.setItem(LocalStorageKeys.FACILITIES, '')
          localStorage.setItem(LocalStorageKeys.FACILITIES_FOR_SELECTED_DISTRICT, '')
          localStorage.setItem(LocalStorageKeys.DISTRICT, '')
          localStorage.setItem(LocalStorageKeys.EVALUATED_MENTEE, '')
          localStorage.setItem(LocalStorageKeys.EVALUATION_SCORES, '')
          localStorage.setItem(LocalStorageKeys.SELECTED_FACILITY, '')


          await useReplicateToCouchDB(DatabaseNames.COMPLETED_EVALUTATIONS);

        }

        return response

      }).catch((error: Error) => {

        console.error('save complete Evaluations:', error)

      });

    } else {

      doc.status = "incomplete";

      saveEval = await dbIncompleteEvals.put(doc).then((response) => {

        if (response.ok === true) {
          useReplicateToCouchDB(DatabaseNames.INCOMPLETE_EVALUATIONS);
        }

        return response

      }).catch((error: Error) => {

        console.error('save Incomplete Evaluations:', error)

      });

    }

    return saveEval
  };

  const fetchUserEval = async (scoreId: string): Promise<any> => {

    return await dbEvals.get(scoreId).then((response) => {
      return response
    }).catch((error: Error) => {
      return error.message
    })
  }

  ///

const deleteEvaluation = async (evalId: string, evalRev: string, dbName: string): Promise<any> => {

  let db: PouchDB.Database<any>;

  if(dbName === DatabaseNames.COMPLETED_EVALUTATIONS ) {

    db  = dbEvals;

  } else {
    
   db = dbIncompleteEvals

  }

  return (await db.remove(evalId, evalRev)).ok

}

  return { evaluationScores, menteeEvalReportData, allEvaluationScores,  storeScore, saveEvaluations, fetchUserEval, fetchEvaluationScores, fetchMenteeIncompleteEval};
});
