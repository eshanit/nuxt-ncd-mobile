interface ScoreStats {
    totalScore: number;
    totalaverageScore: number;
    sumIIEScores: number;
    percIIE: number;
    percTotal: number;
    averageIIEScore: number;
    sumIIEKnowledgeScores: number;
    averageIIEKnowledgeScore: number;
    maxIIEKnowledgeTotal: number;
    averageIIEAcquiredSkillScore: number;
    maxIIEAcquiredSkillTotal: number;
    sumIIEBehaviourScores: number;
    averageIIEBehaviourScore: number;
    maxIIEBehaviourTotal: number;
    sumMgntScores: number;
    sumMgntKnowledgeScores: number;
    averageMgntKnowledgeScore: number;
    maxMgntKnowledgeTotal: number;
    sumMgntAcquiredSkillScores: number;
    averageMgntAcquiredSkillScore: number;
    maxMgntAcquiredSkillTotal: number;
    sumMgntBehaviourScores: number;
    averageMgntBehaviourScore: number;
    maxMgntBehaviourTotal: number;
}

type IScoreStats = Readonly<ScoreStats>

export type { IScoreStats as default}