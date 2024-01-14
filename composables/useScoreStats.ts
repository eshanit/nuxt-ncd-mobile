import sumScoresBetween from "@/utilities/sumScoreBetween";
import type IScoreStats from "@/interfaces/IScoreStats";

const useScoreStats = (scoresArray: Array<any>): IScoreStats => {

  // all scores evaluation:

  const sumScores = scoresArray.reduce((accumulator, object) => {
    return accumulator + object.evalScore;
  },0);

  const averageScore  = (sumScores / (scoresArray.length))

const maxTotal = 87;

const percTotal = (100*sumScores/maxTotal);

/** IIE */

const sumIIEScores = sumScoresBetween(0, 13, scoresArray);

const maxIIETotal = 39;

const averageIIEScore = (sumIIEScores/13);

const percIIE = (100*sumIIEScores/maxIIETotal);

/**iiEKnowledge */

const sumIIEKnowledgeScores = sumScoresBetween(0, 7, scoresArray);

const maxIIEKnowledgeTotal = 21;

const averageIIEKnowledgeScore = (sumIIEKnowledgeScores/7);

/**iiEAcquiredSkill */

const sumIIEAcquiredSkillScores = sumScoresBetween(7, 10, scoresArray);

const maxIIEAcquiredSkillTotal = 9;

const averageIIEAcquiredSkillScore = (sumIIEAcquiredSkillScores/3);

/**iiEBehaviourSkill */

const sumIIEBehaviourScores = sumScoresBetween(10, 13, scoresArray);

const maxIIEBehaviourSkillTotal = 9;

const averageIIEBehaviourSkillScore = (sumIIEBehaviourScores/3)

/** Mgnt */

const sumMgntScores = sumScoresBetween(13, 29, scoresArray);


/**MgntKnowledge */

const sumMgntKnowledgeScores = sumScoresBetween(13, 22, scoresArray);

const maxMgntKnowledgeTotal = 27;

const averageMgntKnowledgeScore = (sumMgntKnowledgeScores/9);

/**MgntAcquiredSkill */

const sumMgntAcquiredSkillScores = sumScoresBetween(22, 28, scoresArray);

const maxMgntAcquiredSkillTotal = 18;

const averageMgntAcquiredSkillScore = (sumMgntAcquiredSkillScores/6);

/**MgntBehaviourSkill */

const sumMgntBehaviourScores = sumScoresBetween(28, 29, scoresArray); //scores.Q29;

const maxMgntBehaviourSkillTotal = 3;

const averageMgntBehaviourSkillScore = (sumMgntBehaviourScores/1);



const scoreStats: IScoreStats = {
  totalScore: sumScores,
  totalaverageScore: averageScore,
  sumIIEScores: sumIIEScores,
  percIIE: percIIE,
  percTotal: percTotal,
  averageIIEScore: averageIIEScore,
  sumIIEKnowledgeScores:sumIIEKnowledgeScores,
  averageIIEKnowledgeScore: averageIIEKnowledgeScore,
  maxIIEKnowledgeTotal: maxIIEKnowledgeTotal,
  averageIIEAcquiredSkillScore: averageIIEAcquiredSkillScore,
  maxIIEAcquiredSkillTotal: maxIIEAcquiredSkillTotal,
  sumIIEBehaviourScores:sumIIEBehaviourScores,
  averageIIEBehaviourScore: averageIIEBehaviourSkillScore,
  maxIIEBehaviourTotal: maxIIEBehaviourSkillTotal,
  sumMgntScores: sumMgntScores,
  sumMgntKnowledgeScores:sumMgntKnowledgeScores,
  averageMgntKnowledgeScore: averageMgntKnowledgeScore,
  maxMgntKnowledgeTotal: maxMgntKnowledgeTotal,
  sumMgntAcquiredSkillScores:sumMgntAcquiredSkillScores,
  averageMgntAcquiredSkillScore: averageMgntAcquiredSkillScore,
  maxMgntAcquiredSkillTotal: maxMgntAcquiredSkillTotal,
  sumMgntBehaviourScores:sumMgntBehaviourScores,
  averageMgntBehaviourScore: averageMgntBehaviourSkillScore,
  maxMgntBehaviourTotal: maxMgntBehaviourSkillTotal
}

return scoreStats

};

export default useScoreStats;
