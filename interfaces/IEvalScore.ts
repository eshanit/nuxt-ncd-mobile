interface EvalScore {
   evalItem: string;
   evalScore: number;
}

type IEvalScore  = Readonly<EvalScore>

export type { IEvalScore  as default}