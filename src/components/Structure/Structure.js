import React, { useState } from "react";
import classes from "./Structure.module.scss";
import "./Structure.css";

import arrow from "./img/arrow.svg";
import Accardion from "../Accardion/Accardion";

const Structure = () => {
    ///////////////////////////////////////////////////////////////////////////
    // Sturctures
    const [structures, setStructures] = useState([
        {
            id: '1',
            name: "Struktur 2",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002',
                    name: 'Marketinq',
                },
                {
                    id: '003',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001',
                            text: 'Strateji'
                        },
                        {
                            id: '000002',
                            text: 'Strateji'
                        },
                        {
                            id: '000003',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '2',
            name: "Struktur 3",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01a',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02a',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03a',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04a',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001a',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001a',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002a',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002a',
                    name: 'Marketinq',
                },
                {
                    id: '003a',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001a',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002a',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001a',
                            text: 'Strateji'
                        },
                        {
                            id: '000002a',
                            text: 'Strateji'
                        },
                        {
                            id: '000003a',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '3',
            name: "Struktur 4",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01b',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02b',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03b',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04b',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001b',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001b',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002b',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002b',
                    name: 'Marketinq',
                },
                {
                    id: '003b',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001b',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002b',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001b',
                            text: 'Strateji'
                        },
                        {
                            id: '000002b',
                            text: 'Strateji'
                        },
                        {
                            id: '000003b',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '4',
            name: "Struktur 5",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01c',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02c',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03c',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04c',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001c',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001c',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002c',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002c',
                    name: 'Marketinq',
                },
                {
                    id: '003c',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001c',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002c',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001c',
                            text: 'Strateji'
                        },
                        {
                            id: '000002c',
                            text: 'Strateji'
                        },
                        {
                            id: '000003c',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '5',
            name: "Struktur 6",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01d',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02d',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03d',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04d',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001d',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001d',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002d',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002d',
                    name: 'Marketinq',
                },
                {
                    id: '003d',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001d',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002d',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001d',
                            text: 'Strateji'
                        },
                        {
                            id: '000002d',
                            text: 'Strateji'
                        },
                        {
                            id: '000003d',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '6',
            name: "Struktur 7",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01e',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02e',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03e',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04e',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001e',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001e',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002e',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002e',
                    name: 'Marketinq',
                },
                {
                    id: '003e',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001e',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002e',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001e',
                            text: 'Strateji'
                        },
                        {
                            id: '000002e',
                            text: 'Strateji'
                        },
                        {
                            id: '000003e',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '7',
            name: "Struktur 8",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01f',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02f',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03f',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04f',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001f',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001f',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002f',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002f',
                    name: 'Marketinq',
                },
                {
                    id: '003f',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001f',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002f',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001f',
                            text: 'Strateji'
                        },
                        {
                            id: '000002f',
                            text: 'Strateji'
                        },
                        {
                            id: '000003f',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '8',
            name: "Struktur 9",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01g',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02g',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03g',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04g',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001g',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001g',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002g',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002g',
                    name: 'Marketinq',
                },
                {
                    id: '003g',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001g',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002g',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001g',
                            text: 'Strateji'
                        },
                        {
                            id: '000002g',
                            text: 'Strateji'
                        },
                        {
                            id: '000003g',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '9',
            name: "Struktur 10",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01h',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02h',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03h',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04h',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001h',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001h',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002h',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002h',
                    name: 'Marketinq',
                },
                {
                    id: '003g',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001h',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002h',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001h',
                            text: 'Strateji'
                        },
                        {
                            id: '000002h',
                            text: 'Strateji'
                        },
                        {
                            id: '000003h',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '10',
            name: "Struktur 11",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01i',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02i',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03i',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04i',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001i',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001i',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002i',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002i',
                    name: 'Marketinq',
                },
                {
                    id: '003i',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001i',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002i',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001i',
                            text: 'Strateji'
                        },
                        {
                            id: '000002i',
                            text: 'Strateji'
                        },
                        {
                            id: '000003i',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        },
        {
            id: '11',
            name: "Struktur 12",
            arrowIcon: arrow,
            isActice: false,
            parts: [
                {
                    id: '01j',
                    color: 'purple',
                    text: '2222'
                },
                {
                    id: '02j',
                    color: 'blue',
                    text: '2222'
                },
                {
                    id: '03j',
                    color: 'green',
                    text: '2222'
                },
                {
                    id: '04j',
                    color: 'yellow',
                    text: '2222'
                }
            ],
            subStructure: [
                {
                    id: '001j',
                    name: 'Hüquq',
                    parts: [
                        {
                            id: '0001j',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '0002j',
                            color: 'yellow',
                            text: '2222'
                        },
                    ]
                },
                {
                    id: '002j',
                    name: 'Marketinq',
                },
                {
                    id: '003j',
                    name: 'Investisiya',
                    parts: [
                        {
                            id: '00001j',
                            color: 'green',
                            text: '2222'
                        },
                        {
                            id: '00002j',
                            color: 'yellow',
                            text: '2222'
                        },
                    ],
                    isActive: false,
                    subBranch: [
                        {
                            id: '000001j',
                            text: 'Strateji'
                        },
                        {
                            id: '000002j',
                            text: 'Strateji'
                        },
                        {
                            id: '000003j',
                            text: 'Strateji'
                        }
                    ]
                },
            ]
        }
    ])

    ///////////////////////////////////////////////////////////////////////////
    // Toggle Main Top Data (Name, Numbers, arrow)
    const handleAccardion = (id) => {
        let copyData = [...structures];

        for (let index = 0; index < copyData.length; index++) {
            if (copyData[index].id === id) {
                copyData[index].isActice = !copyData[index].isActice;
            }

        }

        setStructures(copyData)
    }

    ///////////////////////////////////////////////////////////////////////////
    // Toggle Sub category  Data
    const subStructureHandler = (sectionId, id) => {
        let copyData = [...structures];

        for (let index = 0; index < copyData.length; index++) {
            if (copyData[index].id === sectionId) {
                for (let j = 0; j < copyData[index].subStructure.length; j++) {
                    if (copyData[index].subStructure[j].id === id) {
                        copyData[index].subStructure[j].isActive = !copyData[index].subStructure[j].isActive;
                    }
                }
            }

        }

        setStructures(copyData)
    }

    return (
        <div className={classes.structure}>
            <div className={classes.title}>Struktur</div>
            <div className={classes.all_structures}>
                {structures.map((str) => {
                    return <Accardion
                        key={str.id}
                        isActice={str.isActice}
                        onClickAccardion={() => handleAccardion(str.id)}
                        setSubstructure={subStructureHandler}
                        sturcture={str} />
                })}

            </div>
        </div>
    )
}

export default Structure;