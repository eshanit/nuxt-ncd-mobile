export default [
    {
        section: {
            title: 'Introduction and Initial Evaluation',
            chapters: [
                {
                    title: 'Knowledge',
                    slug: 'knowledge',
                    evaluationItems: [
                        {
                            slug: '1-knowledge-1',
                            number: 1,
                            title: 'Defines Diabetes Mellitus',
                            guide: [
                                {
                                    item: ' A group of metabolic diseases characterized by hyperglycaemia resulting from defects in insulin secretion, insulin action or both',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong definition',
                                    score: 1
                                },
                                {
                                    description: 'Gave partial definition',
                                    score: 2
                                },
                                {
                                    description: 'Defined Correctly',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '1-knowledge-2',
                            number: 2,
                            title: ' Describes three common types of diabetese mellitus (DM).',
                            guide: [
                                {
                                    item: 'Type 1 diabetes Typically onset as child diabetes, secondary lack of insulin production, which results in insulin deficiency',
                                    subItems: null
                                },
                                {
                                    item: 'Type 2 diabetes mellitus (T1DM) - Typically onset as adult diabetes,secondary lack of insulin secretory failure and /or insulin resistance, the critical factor in pathogenesis',
                                    subItems: null
                                },
                                {
                                    item: 'Gestational diabetes - Occurs during pregnancy, due to insulin resistance caused by placental hormones, usually glucose metabolism returns to normal after delivery',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong definition',
                                    score: 1
                                },
                                {
                                    description: 'Gave partial definition',
                                    score: 2
                                },
                                {
                                    description: 'Answered Correctly',
                                    score: 3
                                }
                            ]

                        },
                        {
                            slug: '1-knowledge-3',
                            number: 3,
                            title: ' Lists at least five risk factors of TD2M',
                            guide: [
                                {
                                    item: 'Overweight (BMI > 25kg/m2) and obesity (BMI > 30kg/m2)',
                                    subItems: null
                                },
                                {
                                    item: 'Hypertension, cardiovascular disease',
                                    subItems: null
                                },
                                {
                                    item: 'Metabolic Syndrome (abdominal obesity, high blood sugar, HTN, abnormal cholestrol or triglycerides)',
                                    subItems: null
                                },
                                {
                                    item: 'Family history of diabetes',
                                    subItems: null
                                },
                                {
                                    item: 'Lifestyle Factors',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Inadequate physical activity (less than 150 min. of moderate intesity, aerobic exercise per week)',
                                        'Smoking',
                                        'Unhealthy diets',
                                        'Sugar sweetened beverages and food',
                                        'Excessive alcahol intake (for women >= 2 and men >= 2 a day)'
                                    ]
                                },
                                {
                                    item: 'History of gestational diabetes mellitus (or delivery of baby > 4kg)',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong factors or gave less than 3 correct factors',
                                    score: 1
                                },
                                {
                                    description: 'Gave 3 or 4 correct factors',
                                    score: 2
                                },
                                {
                                    description: 'Gave more than 4 correct factors',
                                    score: 3
                                }
                            ]

                        },
                        {
                            slug: '1-knowledge-4',
                            number: 4,
                            title: 'List at least three acute symptoms and three chronic symptoms of DM',
                            guide: [
                                {
                                    item: 'Acute Symptoms',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Polyphagia',
                                        'Polydipsia',
                                        'Polyuria',
                                        'Tiredness',
                                        'Unplanned weight loss'
                                    ]
                                },
                                {
                                    item: 'Chronic Symptoms',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Recurrent UTIs',
                                        'Candida Infections',
                                        'Slow healing foot wounds or ulcers ',
                                        'Peripheral neuropathy'
                                    ]
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong symptoms or gave less than 3 correct symptoms',
                                    score: 1
                                },
                                {
                                    description: 'Gave 3 to 5 correct symptoms',
                                    score: 2
                                },
                                {
                                    description: 'Gave more than 5 correct symptoms',
                                    score: 3
                                }
                            ]

                        },
                        {
                            slug: '1-knowledge-5',
                            number: 5,
                            title: 'Identifies at least five at risk groups of people that need to be screened for DM',
                            guide: [
                                {
                                    item: 'Patients of any age with symptoms of diabetes',
                                    subItems: null
                                },
                                {
                                    item: 'Screening in high risk population',
                                    slug: 'sub-items',
                                    subItems: [
                                        'HTN stages II and III (newly diagnosed) and all HTN already on treatment',
                                        'Obesity (BMI >= 30kg/m2)',
                                        'Chronic Kidney Disease: Cr Clearance (CrCl) less than or equal to 60ml/min/1.73m2',
                                        'HIV Infection and/or active TB',
                                        'Cardiovascular disease (stroke, ischemic heart disease, heart failure, peripheral artery disease)'
                                    ]
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Identified less than 3 correct risk groups',
                                    score: 1
                                },
                                {
                                    description: 'Identified 3 or 4 correct risk groups',
                                    score: 2
                                },
                                {
                                    description: 'Gave more than 4 correct risk groups',
                                    score: 3
                                }
                            ]

                        },
                        {
                            slug: '1-knowledge-6',
                            number: 6,
                            title: 'Explains the two steps in screening and diagnosing diabetes mellitus in at risk asymptoatic patients.',
                            guide: [
                                {
                                    item: '1. Perfom first test: FBS (preferred) or RBS (if FBS is not possible)',
                                    subItems: null
                                },
                                {
                                    item: '2. If first test is indicative of DM, perfom second test: (A1c at hospital/FBS at RHC level)',
                                    subItems: [
                                        'Both tests indicative of DM ',
                                        ' Second test not indicative of DM',
                                    ]
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong steps',
                                    score: 1
                                },
                                {
                                    description: 'Got one step correct',
                                    score: 2
                                },
                                {
                                    description: 'Gave both steps correctly',
                                    score: 3
                                }
                            ]

                        },
                        {
                            slug: '1-knowledge-7',
                            number: 7,
                            title: 'Lists and explains the purpose of the three tests offered to monitor patients in the pilot project.',
                            guide: [
                                {
                                    item: 'Random and fasting blood sugar - give the blood glucose at the point of testing (Whether patient fasted or not fasted)',
                                    subItems: null
                                },
                                {
                                    item: 'Glycosylated haemoglobin (A1c) test - reflects the average glucose control over past 3 months',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong tests',
                                    score: 1
                                },
                                {
                                    description: 'Got one or two tests correct',
                                    score: 2
                                },
                                {
                                    description: 'Gave three tests correctly',
                                    score: 3
                                }
                            ]

                        }
                    ]
                },
                {
                    title: 'Acquired Skill',
                    slug:   'acquired-skill',                   
                    evaluationItems: [
                        {
                            slug: '1-acquired-skill-1',
                            number: 8,
                            title: 'Performs DM Screening in five groups of people at risk of developing DM.',
                            guide: [
                                {
                                    item: 'Patients of any age with symptoms of diabetes',
                                    subItems: null
                                },
                                {
                                    item: 'Screening in high risk population',
                                    slug: 'sub-items',
                                    subItems: [
                                        'HTN stages II and III (newly diagnosed) and all HTN already on treatment',
                                        'Obesity (BMI >= 30kg/m2)',
                                        'Age greater than or equal to 40 years',
                                        'HIV infection and/or active TB',
                                        'Cardiovascular disease (stroke, ischemic heart disease, heart failure, peripheral artery disease)',
                                        'Previous history of gestational diabetes'
                                    ]
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Perfomed DM Screening in less than two',
                                    score: 1
                                },
                                {
                                    description: 'Perfomed DM Screening in two to three groups',
                                    score: 2
                                },
                                {
                                    description: 'Perfomed DM Screening in greater than two',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '1-acquired-skill-2',
                            number: 9,
                            title: 'Performs six step systematic history taking relevant for diabetes mellitus per checklist.',
                            guide: [
                                {
                                    item: 'Demographics (age, sex, place of residence)',
                                    subItems: null
                                },
                                {
                                    item: 'Previous history of diagnosed diabetes or impaired glucose tolerance',
                                    subItems: null
                                },
                                {
                                    item: 'Symptons of hyperglycemia or diabetes',
                                    subItems: null
                                },
                                {
                                    item: 'History of other medical problems(comorbidities) and previous hospitalizations',
                                    subItems: null
                                },
                                {
                                    item: 'Family history of diabetes',
                                    subItems: null
                                },
                                {
                                    item: 'Medication and allergies',
                                    subItems: null
                                },

                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three',
                                    score: 1
                                },
                                {
                                    description: 'Three to Four',
                                    score: 2
                                },
                                {
                                    description: 'Greater than four',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '1-acquired-skill-3',
                            number: 10,
                            title: 'Evaluate a DM patient using the seven step physical examination per protocol.',
                            guide: [
                                {
                                    item: 'Vital Signs: blood pressure (BP), pulse, weight, height.',
                                    subItems: null
                                },
                                {
                                    item: 'Chest: lung sounds (crackles), wheezing or breath sound, asymmetry(pleural effusion)',
                                    subItems: null
                                },
                                {
                                    item: 'Cardiac: irregular rythm, heart-rate greater 100 or less than 50 bpm',
                                    subItems: null
                                },
                                {
                                    item: 'Extremity: edema, chronic ulcerations, peripheral pulses',
                                    subItems: null
                                },
                                {
                                    item: 'Skin: signs of chronic wounds or infection',
                                    subItems: null
                                },
                                {
                                    item: 'Neurological: focal weakness, numb feet, slurred speech or gait instability (previous stroke)',
                                    subItems: null
                                },
                                {
                                    item: 'Psychological: remember that anxiety can raise blood pressure',
                                    subItems: null
                                }

                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three',
                                    score: 1
                                },
                                {
                                    description: 'Three to five',
                                    score: 2
                                },
                                {
                                    description: 'Greater than five',
                                    score: 3
                                }
                            ]
                        },
                    ]

                },
                {
                    title: 'Behaviour',
                    slug: 'behaviour',
                    evaluationItems: [
                        {
                            slug: '1-behaviour-1',
                            number: 11,
                            title: 'Uses effective and appropriate level of communication with patients.',
                            guide: [
                                {
                                    item: '-',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'No',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '1-behaviour-2',
                            number: 12,
                            title: 'Perfoms physical examination in a gentle manner.',
                            guide: [
                                {
                                    item: '-',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'No',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '1-behaviour-3',
                            number: 13,
                            title: 'Perfoms physical examination in private conditions.',
                            guide: [
                                {
                                    item: '-',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'No',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        section: {
            title: 'Management of Diabetes Mellitus',
            chapters: [
                {
                    title: 'Knowledge',
                    slug: 'knowledge',
                    evaluationItems: [
                        {
                            slug: '2-knowledge-1',
                            number: 14,
                            title: 'Describes the three main aims for treating Diabetes Mellitus',
                            guide: [
                                {
                                    item: ' To prevent and control hyperglycaemia, hyperglycaemia is harmful to the body tissue and vascular system',
                                    subItems: null
                                },
                                {
                                    item: ' To prevent complications',
                                    subItems: null
                                },
                                {
                                    item: ' Treatment ensures adequate delivery of glucose to the body tissues',
                                    slug: 'sub-items',
                                    subItems: [
                                        'less than 65 years :less than 7%',
                                        'greater than or equal to 65 years : less than 8%'
                                    ]
                                },
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong aims or none',
                                    score: 1
                                },
                                {
                                    description: 'One or two aims given',
                                    score: 2
                                },
                                {
                                    description: 'Three aims correctly given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-2',
                            number: 15,
                            title: 'Explains the three lifestyle changes to be given to patients as part of management of DM.',
                            guide: [
                                {
                                    item: ' Nutritional: Well balanced high fibre diet; weight loss if overweight or obese',
                                    subItems: null
                                },
                                {
                                    item: ' Physical exercise: as part of daily routine - exercise lowers blood sugar',
                                    subItems: null
                                },
                                {
                                    item: ' Behaviour change: Reduce harmful use of alcahol, reduce salt, stop smoking',
                                    subItems: null
                                },
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Gave wrong lifestyle changes or none',
                                    score: 1
                                },
                                {
                                    description: 'One or two lifestyle changes given',
                                    score: 2
                                },
                                {
                                    description: 'Three lifestyle changes correctly given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-3',
                            number: 16,
                            title: 'Lists the three medications used in DM (Type 1 and Type 2) management and gives one common side effect of each..',
                            guide: [
                                {
                                    item: ' Metformin (1st line oral DM medicine) - Insulin Sensitizer -> Gastrointestinal symptoms. (Side effects: Weight loss, vomitting, diarrhoea, abdominal discomfort, anorexia, lactic acidosis (very rare in patients with CKD))',
                                    subItems: null
                                },
                                {
                                    item: 'Glibenclamide (add on oral DM medicine) - Increase insulin production by the beta cells of pancreas. (Side effects: Prolonged hypoglycemia (elderly patients with impaired renal function), rash (rare), diarrhoea, constipation, weight gain)',
                                    subItems: null
                                },
                                {
                                    item: 'Insulin - a hormone produced in pancreas, which regulates the amount if glucose in the blood. (Side effects: Swelling of your arms and legs, low blood sugar (hypoglycaemia), weight gain, skin changes at injection site (lipodystrophy))',
                                    subItems: null
                                },
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Wrong responses or no meds given',
                                    score: 1
                                },
                                {
                                    description: 'One or two meds given',
                                    score: 2
                                },
                                {
                                    description: 'Three meds correctly given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-4',
                            number: 17,
                            title: ' Lists at least five symptoms of hypoglycaemia',
                            guide: [
                                {
                                    item: 'Shakiness',
                                    subItems: null
                                },
                                {
                                    item: 'Sweating, chills and clumsiness',
                                    subItems: null
                                },
                                {
                                    item: 'Dizziness or light headedness',
                                    subItems: null
                                },
                                {
                                    item: 'Confusion',
                                    subItems: null
                                },
                                {
                                    item: 'Syncope',
                                    subItems: null
                                },
                                {
                                    item: 'Irritability, anxiety (mood changes)',
                                    subItems: null
                                },
                                {
                                    item: 'Headache',
                                    subItems: null
                                },
                                {
                                    items: 'Hunger',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three symptoms given',
                                    score: 1
                                },
                                {
                                    description: 'Three to four symptoms given',
                                    score: 2
                                },
                                {
                                    description: 'More than four symptoms given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-5',
                            number: 18,
                            title: ' Lists at least five symptoms of hyperglycaemia',
                            guide: [
                                {
                                    item: 'Polydipsia (increased thirst)',
                                    subItems: null
                                },
                                {
                                    item: 'Polyuria (increased urination) ',
                                    subItems: null
                                },
                                {
                                    item: 'Dizziness or light headedness',
                                    subItems: null
                                },
                                {
                                    item: 'Blurred vision',
                                    subItems: null
                                },
                                {
                                    item: 'Loosing weight',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three symptoms given',
                                    score: 1
                                },
                                {
                                    description: 'Three to four symptoms given',
                                    score: 2
                                },
                                {
                                    description: 'More than four symptoms given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-6',
                            number: 19,
                            title: ' Gives at least two acute and at least two chronic complications of uncontrolled DM',
                            guide: [
                                {
                                    item: 'Acute complications',
                                    slug: 'sub-items',
                                    subItems: [
                                        ' Diabetic ketoacidosis (DKA)',
                                        'The hyperglycemic hyperosmolar non-ketotic syndrome (HHS)',
                                        'hypoglycaemia'
                                    ]
                                },
                                {
                                    item: 'Chronic complications (Microvascular complications)',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Neuropathies',
                                        'Nephropathies',
                                        'Retinopathies'
                                    ]
                                },
                                {
                                    item: 'Chronic complications (Macrovascular complications)',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Coronary artery disease - angina pectoris, myocardial infarction, sudden death',
                                        'Cerebrovascular disease - Stroke, transient ischaemic attack, vascular dementia, sudden death',
                                        'Peripheral vascular disease (PVD) - DM cause organic PVD (Changes in blood vessel structure like inflammation, plaques, and tissue demage)'
                                    ]
                                },
                                {
                                    item: ' Foot Ulcers - caused by a combination of peripheral vascular disease and peripheral neuropathy',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than two complications given',
                                    score: 1
                                },
                                {
                                    description: 'Two to Three complications given',
                                    score: 2
                                },
                                {
                                    description: 'More than four complications given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-7',
                            number: 20,
                            title: '  Lists the three diagnostic criteria for DKA.',
                            guide: [
                                {
                                    item: ' Hyperglycemia: Greater than or equal to 11.1 mmol/L (usually much higher)',
                                    subItems: null
                                },
                                {
                                    item: ' Ketosis: Greater than or equal to 2+ urinary ketones (1+ can happen with fasting)',
                                    subItems: null
                                },
                                {
                                    item: 'Metabolic acidosis (Clinically unwell with at least one of the following)',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Sighing kussmaul breathing',
                                        'Sweet odour on breath',
                                        'Severe dehydration or shock',
                                        'Severe polyuria and polydipsia',
                                        'Abdominal pain and vomiting'
                                    ]
                                },
                                {
                                    item: ' Foot Ulcers - caused by a combination of peripheral vascular disease and peripheral neuropathy',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'One or Two correct diagnostic criteria given',
                                    score: 2
                                },
                                {
                                    description: 'Three diagnostic criteria correctly given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-8',
                            number: 21,
                            title: 'Explains the three categories of DM patients that need to be referred to the doctors.',
                            guide: [
                                {
                                    item: ' Suspicion of T1DM: RBS greater than or equal to 11.1 mmol/L in patient not yet confirmed with DM symptoms of hyperglycaemia (polydipsia, polyuria, unexplained drastic loss of weight) and ketonesin urine',
                                    subItems: null
                                },
                                {
                                    item: ' Initiation of insulin in T1DM and T2DM patients not on target A1c after at least 3 months on max dose of oral hypoglycaemics',
                                    subItems: null
                                },
                                {
                                    item: 'Patients of DM treatment presenting with complications of uncontrolled DM -> (Acute)',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Patients that have lost hypoglycaemic awareness',
                                        'Severe hyperglycemia (RBS greater than or equal to 20 mm/L) and no clear cut explanation (such as missing dosages)',
                                        'DKA'
                                    ]
                                },
                                {
                                    item: 'Patients of DM treatment presenting with complications of uncontrolled DM -> (Chronic | Microvascular complications )',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Neuropathies',
                                        'Nephropathies',
                                        'Retinopathies'
                                    ]
                                },
                                {
                                    item: 'Patients of DM treatment presenting with complications of uncontrolled DM -> (Chronic | Macrovascular complications )',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Coronary artery disease (CVD)',
                                        'Cerebrovascular disease',
                                        'Peripheral vascular disease (PVD)'
                                    ]
                                },
                                {
                                    item: 'Foot ulcers which are deep and / potentially infected ulcer',
                                    setItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'One or Two correct categories given',
                                    score: 2
                                },
                                {
                                    description: 'Three correct categories correctly given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-knowledge-9',
                            number: 22,
                            title: ' Gives the two principles in management of diabetic foot.',
                            guide: [
                                {
                                    item: ' Early detection: catch small injuries early and stop them from turning into big injuries',
                                    subItems: null
                                },
                                {
                                    item: ' Patient education, regular foot surveillance, improved glycemic control',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'One correct principle given',
                                    score: 2
                                },
                                {
                                    description: 'Two correct principles correctly given',
                                    score: 3
                                }
                            ]
                        },

                    ]
                },
                {
                    title: 'Acquired Skill',
                    slug: 'acquired-skill',
                    evaluationItems: [
                        {
                            slug: '2-acquired-skill-1',
                            number: 23,
                            title: 'Gives the patients the six key messages to aid management of DM.',
                            guide: [
                                {
                                    item: ' Control sugar intake (such as table sugar, honey, sugar-cane, processed or pre-cooked foods containing sugar, sweet drinks)',
                                    subItems: null
                                },
                                {
                                    item: ' Dont smoke, avoid alcohol, limit salt intake',
                                    subItems: null
                                },
                                {
                                    item: ' Control your weight',
                                    subItems: null
                                },
                                {
                                    item: ' Exercise 30 miins a day',
                                    subItems: null
                                },
                                {
                                    item: ' Eat a healthy diet',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Lots of vegitables and fruits',
                                        'Eat foods with high fibre content',
                                        'Limit carbohydrates (starch and sugar) content of meals, snacks and drinks',
                                        'Limit fat',
                                        'limit intake of refined and processed foods high in sugar and salt'
                                    ]
                                },
                                {
                                    item: ' Prevention of complications',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Appropriate foot wear and care',
                                        'Eat foods with high fibre content',
                                        'Adherence to diabetes medication and/or insulin'
                                    ]
                                },
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three given',
                                    score: 1
                                },
                                {
                                    description: 'Three to four given',
                                    score: 2
                                },
                                {
                                    description: 'Greater than four given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-acquired-skill-2',
                            number: 24,
                            title: 'Follows correctly the schedules of the <b>six</b> aspects to monitor in a DM patient.',
                            guide: [
                                {
                                    item: ' TB screening every clinical visit',
                                    subItems: null
                                },
                                {
                                    item: ' BP check every clinical visit',
                                    subItems: null
                                },
                                {
                                    item: ' BMI at baseline then 6 monthly',
                                    subItems: null
                                },
                                {
                                    item: ' Annual foot exam',
                                    subItems: null
                                },
                                {
                                    item: ' A1c at baseline',
                                    slug: 'sub-items',
                                    subItems: [
                                        'If patient has reached treatment target, repeat after 6 months',
                                        'If patient has not reached treatment target, repeat after 3 months'
                                    ]
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than three given',
                                    score: 1
                                },
                                {
                                    description: 'Three to four given',
                                    score: 2
                                },
                                {
                                    description: 'Greater than four given',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-acquired-skill-3',
                            number: 25,
                            title: 'Recognizes patient with hypoglycaemia.',
                            guide: [
                                {
                                    item: ' Symptomatically - at least 5 symptoms',
                                    subItems: null
                                },
                                {
                                    item: ' Using blood glucose reading: less than 3.5 mmol/L',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-acquired-skill-4',
                            number: 26,
                            title: 'Implements the <b>four</b> step management of hypoglycaemia.',
                            guide: [
                                {
                                    item: ' 1. Provide 10 to 15g of fast acting carbohydrate etc',
                                    subItems: null
                                },
                                {
                                    item: ' 2. Recheck blood gluecose in 15 to 20 minutes and repeat above treatment if blood glucose is less than 3.9 mmol/L',
                                    subItems: null
                                },
                                {
                                    item: ' 3. If glucose is normal, give a protein meal or snack',
                                    subItems: null
                                },
                                {
                                    item: ' 4. If symptoms, but blood glucose is greater than 3.5 mmol/L, give a protein meal or snack',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'Less than two given',
                                    score: 1
                                },
                                {
                                    description: 'Two to three',
                                    score: 2
                                },
                                {
                                    description: 'Greater than three',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-acquired-skill-5',
                            number: 27,
                            title: 'Recognizes patients with hyperglycaemia.',
                            guide: [
                                {
                                    item: ' Symptomatically - at least 5 symptoms',
                                    subItems: null
                                },
                                {
                                    item: ' Using blood glucose reading: greater than or equal to 11.1 mmol/L',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        },
                        {
                            slug: '2-acquired-skill-6',
                            number: 28,
                            title: 'Follows the <b>three</b> procedures in managing hyperglycaemia depending on the level of hyperglycaemia.',
                            guide: [
                                {
                                    item: '  Greater than 15 mmol/L but less than 20 mml/L',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Increase patient`s drug doses according to time when hyperglycaemia occurs, if patient is on 1 drug and at its maximum dose, add another drug',
                                        'Follow up after 1 week',
                                        'Does not give supplimentary regular insulin'
                                    ]
                                },
                                {
                                    item: ' Greater than or equal to 20 mmol/L or HI',
                                    slug: 'sub-items',
                                    subItems: [
                                        'Refer to doctor who may do the following',
                                        'Give 10 units regular insulin and recheck in 30 minutes',
                                        'Give insulin SC or IM and not IV'
                                    ]
                                },
                                {
                                    item: 'Do not give large doses of supplimentary regular insulin, which may drop the blood glucose precipitously.',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'None given',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        },

                    ]
                },
                {
                    title: 'Behaviour',
                    slug: 'behaviour',
                    evaluationItems: [
                        {
                            slug: '2-behaviour-1',
                            number: 29,
                            title: 'Explains the importance of adherence to treatment in an appropriate manner.',
                            guide: [
                                {
                                    item: '-',
                                    subItems: null
                                }
                            ],
                            scoring: [
                                {
                                    description: 'Cannot be evaluated',
                                    score: 0
                                },
                                {
                                    description: 'No',
                                    score: 1
                                },
                                {
                                    description: 'Partly',
                                    score: 2
                                },
                                {
                                    description: 'Yes',
                                    score: 3
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
]

