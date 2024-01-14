import type IEvalScore from "./IEvalScore";
import type IScoreStats from "./IScoreStats";

interface FinalEvaluation {
    _id: string;
    evaluator: object;
    selectedCoMentors: Array<Object>;
    mentee: object;
    district: string;
    searchIndex: string;
    dateSaved: number;
    status: string;
    lastQuestion: number;
    scores: Array<IEvalScore>;
    scoreStats: IScoreStats;
}

type IFinalEvaluation  = Readonly<FinalEvaluation>

export type { IFinalEvaluation  as default}