import { FileEntity } from '../lib/utils/jsonResponses/FileEntity'
import { Step, StepStateEnum } from '../lib/containers/drug_upload_tool/types'
import {  ListResponse } from '../lib/utils/jsonResponses/Forms'
export const steps: Step[] = [
  {
    id: 'toxicology _data',
    order: 60,
    title: 'Toxicology Data',
    default: 'ld50',
    static: true,
    inProgress: true,
    state: StepStateEnum.TODO,
    rules: [],
  },
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.ERROR,
    child: false,
    excluded: false,
    rules: [],
  },
  {
    id: 'acute_dosing',
    order: 62,
    title: 'Acute Dosing',
    default: 'chronic_dosing',
    child: false,
    excluded: false,
    static: false,
    inProgress: false,
    final: true,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]

export const stepsWithChildren: Step[] = [
  {
    id: 'toxicology _data',
    order: 60,
    title: 'Toxicology Data',
    default: 'ld50',
    static: true,
    inProgress: true,
    state: StepStateEnum.TODO,
    rules: [],
    children: ['ld50', 'acute_dosing'],
  },
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.ERROR,
    child: true,
    excluded: false,
    rules: [],
  },
  {
    id: 'acute_dosing',
    order: 62,
    title: 'Acute Dosing',
    default: 'chronic_dosing',
    child: true,
    excluded: false,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
  {
    id: 'acute_dosing_not_child',
    order: 63,
    title: 'Acute Dosing Not Child',
    default: 'chronic_dosing',
    child: false,
    excluded: true,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]

export const stepsWithUserData: Step[] = [
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.COMPLETED,
    child: true,
    excluded: false,
    rules: [],
  },
  {
    id: 'basic',
    order: 62,
    title: 'Basic',
    default: 'naming',
    child: true,
    excluded: false,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
  {
    id: 'naming',
    order: 63,
    title: 'Naming',
    default: 'chronic_dosing',
    child: false,
    excluded: true,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: [],
  },
]

export const formUiSchema = {
  welcome: {
    submission_name: {
      'ui:title': 'Submission Name',
      'ui:placeholder': 'Enter a unique name for this compound submission',
    },
  },
  restrictions: {
    off_label: {
      'ui:title': 'Is this component available for off label use?',
      'ui:widget': 'radio',
      'ui:help': '',
    },
    ip_restrictions: {
      'ui:title': 'Are there any existing IP restrictions for this compound',
      'ui:widget': 'radio',
      'ui:help': '',
      'ui:enumDisabled': [true],
    },
  },
  naming: {
    chemical_name: {
      'ui:title': 'Chemical Name',
      'ui:placeholder': 'What is the chemical name?',
    },
    common_name: {
      'ui:title': 'Common Name',
      'ui:placeholder': 'What is the common name?',
    },
    iupac_name: {
      'ui:title': 'IUPAC Name',
      'ui:placeholder': 'Enter the IUPAC name (if available)',
    },
    cas_number: {
      'ui:title': 'CAS Number',
      'ui:placeholder':
        'Enter the CAS number (if available), including hyphens',
    },
  },
}

export const formSchema = {
  definitions: {
    experiment: {
      type: 'object',
      required: [],
      properties: {
        name: {
          type: 'string',
        },
        species: {
          type: 'string',

          enum: ['Mouse', 'Rat', 'Monkey', 'Other'],
          default: 'Mouse',
        },

        strain: {
          type: 'string',
        },
        assay_description: {
          type: 'string',
        },
        age: {
          type: 'string',
        },
        sex: {
          type: 'string',
          enum: ['Male', 'Female', 'Both'],
          default: 'Male',
        },
        duration: {
          type: 'string',
        },
        'dose-range': {
          type: 'object',
          properties: {
            dose_range_min: {
              type: 'number',
            },
            dose_range_max: {
              type: 'number',
            },
          },
        },
        ld50: {
          type: 'string',
        },
        route: {
          type: 'string',
          enum: ['TO-DO-1', 'TO-DO-2'],
          default: 'TO-DO-1',
        },
        vehicle_formulation: {
          type: 'string',
        },
      },
      dependencies: {
        species: {
          oneOf: [
            {
              properties: {
                species: {
                  enum: ['Mouse', 'Rat', 'Monkey'],
                },
              },
            },
            {
              properties: {
                species: {
                  enum: ['Other'],
                },
                species_other: {
                  type: 'string',
                },
              },
              required: ['species_other'],
            },
          ],
        },
      },
    },
    chronic_dosing_experiment: {
      type: 'object',
      required: [],
      properties: {
        name: {
          type: 'string',
        },
        species: {
          type: 'string',

          enum: ['Mouse', 'Rat', 'Monkey', 'Other'],
          default: 'Mouse',
        },

        strain: {
          type: 'string',
        },
        assay_description: {
          type: 'string',
        },
        age: {
          type: 'string',
        },
        sex: {
          type: 'string',
          enum: ['Male', 'Female', 'Both'],
          default: 'Male',
        },
        duration: {
          type: 'string',
        },
        'dose-range': {
          type: 'object',
          properties: {
            dose_range_min: {
              type: 'number',
            },
            dose_range_max: {
              type: 'number',
            },
          },
        },
        ld50: {
          type: 'string',
        },
        route: {
          type: 'string',
          enum: ['TO-DO-1', 'TO-DO-2'],
          default: 'TO-DO-1',
        },
        vehicle_formulation: {
          type: 'string',
        },
      },
      dependencies: {
        species: {
          oneOf: [
            {
              properties: {
                species: {
                  enum: ['Mouse', 'Rat', 'Monkey'],
                },
              },
            },
            {
              properties: {
                species: {
                  enum: ['Other'],
                },
                species_other: {
                  type: 'string',
                },
              },
              required: ['species_other'],
            },
          ],
        },
      },
    },

    welcome: {
      type: 'object',
      required: ['submission_name'],
      properties: {
        submission_name: {
          type: 'string',
        },
      },
    },
    restrictions: {
      type: 'object',
      required: [],
      properties: {
        ip_restrictions: {
          type: 'boolean',
          default: false,
          enum: [true, false],
          enumNames: ['Yes', 'No'],
          uniqueItems: true,
        },
        off_label: {
          type: 'boolean',
          default: true,
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
      },
    },
    naming: {
      type: 'object',
      required: ['chemical_name', 'common_name'],
      properties: {
        chemical_name: {
          type: 'string',
        },
        common_name: {
          type: 'string',
        },
        iupac_name: {
          type: 'string',
        },
        cas_number: {
          type: 'string',
        },
      },
    },
    measurements: {
      type: 'object',
      required: ['compound_amount', 'molecular_weight', 'is_solution'],
      properties: {
        compound_amount: {
          type: 'string',
        },
        molecular_weight: {
          type: 'string',
        },
        is_solution: {
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
          default: false,
        },
      },
      dependencies: {
        is_solution: {
          oneOf: [
            {
              properties: {
                is_solution: {
                  enum: [false],
                },
              },
            },
            {
              properties: {
                is_solution: {
                  enum: [true],
                },
                compound_concentration: {
                  type: 'string',
                },
                compound_purity: {
                  type: 'string',
                },
              },
              required: ['compound_concentration', 'compound_purity'],
            },
          ],
        },
      },
    },
    basic: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'bSubmission Name',
        },
      },
    },
    binding: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'dSubmission Name',
        },
      },
    },
    efficacy: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'cSubmission Name',
        },
      },
    },
    pre_clinical_in_vivo: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'vvSubmission Name',
        },
      },
    },
    pk_in_silico: {
      type: 'object',
      required: ['submissionNamde'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'Submission Name',
        },
      },
    },
    pk_in_vitro: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'Submission Name',
        },
      },
    },
    pk_in_vivo: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'Submission Name',
        },
      },
    },
    ld50: {
      type: 'object',
      properties: {
        experiments: {
          type: 'array',
          title: 'Experiments',
          items: {
            $ref: '#/definitions/experiment',
          },
        },
      },
    },
    acute_dosing: {
      type: 'object',

      properties: {
        experiments: {
          type: 'array',
          title: 'Experiments',
          items: {
            $ref: '#/definitions/experiment',
          },
        },
      },
    },
    chronic_dosing: {
      properties: {
        experiments: {
          type: 'array',
          title: 'Experiments',
          items: {
            $ref: '#/definitions/experiment',
          },
        },
      },
    },
    teratogenicity: {
      type: 'object',

      properties: {
        experiments: {
          type: 'array',
          title: 'Experiments',
          items: {
            $ref: '#/definitions/experiment',
          },
        },
      },
    },
    clinical: {
      type: 'object',
      required: ['submissionName'],
      properties: {
        submissionName: {
          type: 'string',
          title: 'Submission Name',
        },
      },
    },
  },
  type: 'object',
  properties: {
    welcome: {
      title: 'Welcome',
      $ref: '#/definitions/welcome',
    },
    restrictions: {
      title: 'Restrictions',
      $ref: '#/definitions/restrictions',
    },
    naming: {
      title: 'Naming',
      $ref: '#/definitions/naming',
    },
    measurements: {
      title: 'Measurements',
      $ref: '#/definitions/measurements',
    },
    basic: {
      title: 'Basic',
      $ref: '#/definitions/basic',
    },
    binding: {
      title: 'Binding',
      $ref: '#/definitions/binding',
    },
    efficacy: {
      title: 'Efficacy',
      $ref: '#/definitions/efficacy',
    },
    pre_clinical_in_vivo: {
      title: 'Pre -clinical In Vivo',
      $ref: '#/definitions/pre_clinical_in_vivo',
    },
    pk_in_silico: {
      title: 'PK In Silico',
      $ref: '#/definitions/pk_in_silico',
    },
    pk_in_vitro: {
      title: 'PK In Vitro',
      $ref: '#/definitions/pk_in_vitro',
    },
    pk_in_vivo: {
      title: 'PK In Vivo',
      $ref: '#/definitions/pk_in_vivo',
    },
    ld50: {
      title: 'LD50',
      $ref: '#/definitions/ld50',
    },
    acute_dosing: {
      title: 'Acute Dosing',
      $ref: '#/definitions/acute_dosing',
    },
    chronic_dosing: {
      title: 'Chronic Dosing',
      $ref: '#/definitions/chronic_dosing',
    },
    teratogenicity: {
      title: 'Teratogenicity',
      $ref: '#/definitions/teratogenicity',
    },
    clinical: {
      title: 'Clinical',
      $ref: '#/definitions/clinical',
    },
  },
}

export const formNavSchema = {
  steps: [
    {
      id: 'welcome',
      order: 0,
      title: 'Welcome',
      default: 'prelim_data',
      description:
        '<p> This is some description. It will go <strong>here</strong></p>',
      rules: [{ rule1: 'restrictions' }],
    },
    {
      id: 'prelim_data',
      order: 2,
      title: 'Preliminary Data',
      default: 'restrictions',
      static: true,
      children: ['restrictions', 'naming', 'measurements', 'basic'],
    },
    {
      id: 'restrictions',
      order: 3,
      title: 'Restrictions',
      default: 'naming',
      child: true,
    },
    {
      id: 'naming',
      order: 5,
      title: 'Naming',
      default: 'measurements',
      child: true,
    },
    {
      id: 'submit',
      order: 6,
      title: 'Naming',
      isFinal: true,
      default: 'measurements',
      child: false,
    },
  ],
}

export const submissionData = {
  naming: { chemical_name: 'tes23e2' },
  welcome: { submission_name: 'test123Alina3' },
  restrictions: { ip_restrictions: false, off_label: true },
  measurements: { is_solution: false, 'Do you have any pets?': false },
  basic: {
    reqtextfield: undefined,
  },
  pk_in_vivo: {},
  ld50: {
    experiments: [
      {
        name: 'Bruno Mcleod1Alia5',
        species: 'Monkey',
        strain: 'Cillum qui consectet',
        assay_description: 'Itaque in laudantium',
        age: 'Soluta non tempora e',
        sex: 'Male',
        duration: 'Consequat Labore un',
        'dose-range': { dose_range_min: 54, dose_range_max: 14 },
        ld50: 'Laboriosam minima o',
        route: 'TO-DO-2',
        vehicle_formulation: 'Aliquid sunt itaque ',
      },
    ],
  },
  acute_dosing: {
    experiments: [
      {
        name: 'Joan Nunez',
        species: 'Rat',
        strain: 'Aliquid ipsam labore',
        assay_description: 'Ullam cum consequunt',
        age: 'Velit exercitation l',
        sex: 'Male',
        duration: 'Numquam atque irure ',
        'dose-range': { dose_range_min: 20, dose_range_max: 39 },
        ld50: 'Nisi error distincti',
        route: 'TO-DO-2',
        vehicle_formulation: 'Eaque inventore atqu',
        species_other: 'Aspernatur neque sin',
      },
      {
        name: 'Clare Osborn',
        species: 'Rat',
        strain: 'Saepe quidem dolores',
        assay_description: 'Adipisci aute nisi p',
        age: 'Error expedita aut o',
        sex: 'Male',
        duration: 'Fugiat esse do veli',
        'dose-range': { dose_range_min: 37, dose_range_max: 64 },
        ld50: 'Rerum quia sequi exp',
        route: 'TO-DO-2',
        vehicle_formulation: 'Quibusdam ea volupta',
      },
    ],
  },
  chronic_dosing: {
    experiments: [
      {
        name: 'Sydnee Potts',
        species: 'Other',
        strain: 'Sit quas molestias r',
        assay_description: 'Provident temporibu',
        age: 'Laborum Aliquid del',
        sex: 'Male',
        duration: 'Laboriosam omnis au',
        'dose-range': { dose_range_min: 11, dose_range_max: 20 },
        ld50: 'Non sed sint vel vol',
        route: 'TO-DO-2',
        vehicle_formulation: 'Velit rem et qui ut',
      },
      {
        name: 'Kalia Kent',
        species: 'Other',
        strain: 'Fugit recusandae O',
        assay_description: 'Assumenda libero nat',
        age: 'Officia aut ipsa co',
        sex: 'Male',
        duration: 'Quod eum suscipit du',
        'dose-range': { dose_range_min: 21, dose_range_max: 80 },
        ld50: 'Lorem ex sequi repre',
        route: 'TO-DO-2',
        vehicle_formulation: 'Nisi quas asperiores',
      },
    ],
  },
  teratogenicity: {
    experiments: [
      {
        name: 'Henry Buck',
        species: 'Monkey',
        strain: 'Sit quia et sunt nul',
        assay_description: 'Ratione blanditiis i',
        age: 'Sint illo consectetu',
        sex: 'Male',
        duration: 'Laborum Est qui ut',
        'dose-range': { dose_range_min: 1, dose_range_max: 47 },
        ld50: 'Quidem voluptatem ut',
        route: 'TO-DO-2',
        vehicle_formulation: 'Corrupti ut dolor d',
      },
      {
        name: 'Kasper Riggs',
        species: 'Monkey',
        strain: 'Iure cum sunt qui ni',
        assay_description: 'Asperiores laboriosa',
        age: 'Dolore ut sit corru',
        sex: 'Male',
        duration: 'Sunt veniam quam n',
        'dose-range': { dose_range_min: 27, dose_range_max: 77 },
        ld50: 'Minim ut fugit in f',
        route: 'TO-DO-2',
        vehicle_formulation: 'Itaque in sunt ipsa',
      },
    ],
  },
}

export const formListDataInProgress : ListResponse= {
  nextPageToken: '123',
  page: [
   
    {
      formDataId: '25',
      etag: '10977a7f-e3a4-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'AlinaNewAPIProdTest.json',
      createdBy: '3391841',
      createdOn: '2019-09-30T17:01:51.622Z',
      modifiedOn: '2019-09-30T17:02:20.399Z',
      dataFileHandleId: '43485087',
      submissionStatus: { state: 'WAITING_FOR_SUBMISSION' },
    },
  ],
}

export const formListDataSubmitted = {
  page: [
    {
      formDataId: '33',
      etag: '11240522-e403-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'd.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:22:13.755Z',
      modifiedOn: '2019-10-01T04:22:13.755Z',
      dataFileHandleId: '43505207',
      submissionStatus: {
        submittedOn: '2019-10-01T04:22:23.511Z',
        state: 'SUBMITTED_WAITING_FOR_REVIEW',
      },
    },
    {
      formDataId: '32',
      etag: 'df863d6c-e402-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'zxcz.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:18:27.523Z',
      modifiedOn: '2019-10-01T04:18:27.523Z',
      dataFileHandleId: '43504979',
      submissionStatus: {
        submittedOn: '2019-10-01T04:21:00.269Z',
        state: 'SUBMITTED_WAITING_FOR_REVIEW',
      },
    },
    {
      formDataId: '31',
      etag: 'a057855f-e401-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'Full data submit only.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T04:11:43.660Z',
      modifiedOn: '2019-10-01T04:11:56.364Z',
      dataFileHandleId: '43504590',
      submissionStatus: {
        submittedOn: '2019-10-01T04:12:04.769Z',
        state: 'SUBMITTED_WAITING_FOR_REVIEW',
      },
    },
    {
      formDataId: '29',
      etag: '32e85704-e400-11e9-94e2-02c936c5ff9c',
      groupId: '9',
      name: 'Jeremy Lambert.json',
      createdBy: '3391841',
      createdOn: '2019-10-01T03:54:10.880Z',
      modifiedOn: '2019-10-01T03:54:10.880Z',
      dataFileHandleId: '43503572',
      submissionStatus: {
        submittedOn: '2019-10-01T04:01:51.672Z',
        state: 'SUBMITTED_WAITING_FOR_REVIEW',
      },
    }
  ],
}

export const mockFileEntityWithVersion: FileEntity = {
  id: "syn123",
  parentId: "syn12034",
  dataFileHandleId : "123332",
  name: "my file name",
  concreteType: "org.sagebionetworks.repo.model.FileEntity",
  versionNumber: 3,
}
