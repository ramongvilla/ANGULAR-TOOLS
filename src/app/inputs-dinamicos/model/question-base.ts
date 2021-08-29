export class QuestionBase {
    // value: T|undefined;
    // key: string;
    // label: string;
    // required: boolean;
    // order: number;
    // controlType: string
    // type: string;
    // options: {key: string, value: string}[];
    fixCampo: boolean;
    idCatalogoAnswers: any;
    idCampos: number;
    catalogoAnswers: any[];
    text: any;
    label: string;
    idEntidadG: any;
    idCampoExtra: number;
    type: string;
    idTipoEntidad: any;
    value: number;
    idCampoType: number;

    // value?: T;
    // key?: string;
    // label?: string;
    // required?: boolean;
    // order?: number;
    // type?: string;
    // options?: {key: string, value: string}[];
    constructor(options: {

        fixCampo?: boolean;
        idCatalogoAnswers?: any;
        idCampos?: number;
        catalogoAnswers?: any[];
        text?: any;
        label?: string;
        idEntidadG?: any;
        idCampoExtra?: number;
        type?: string;
        idTipoEntidad?: any;
        value?: number;
        idCampoType?: number;
        // controlType?: string;
    } = {}) {
        this.fixCampo = options.fixCampo;
        this.idCatalogoAnswers = options.idCatalogoAnswers;
        this.idCampos = options.idCampos
        this.catalogoAnswers = options.catalogoAnswers;
        this.text = options.text;
        this.label = options.label;
        this.idEntidadG = options.idEntidadG;
        this.idCampoExtra = options.idCampoExtra;
        this.type = options.type;
        this.idTipoEntidad = options.idTipoEntidad;
        this.value = options.value
        this.idCampoType = options.idCampoType;
        //   this.value = options.value;
        //   this.key = options.key || '';
        //   this.label = options.label || '';
        //   this.required = !!options.required;
        //   this.order = options.order === undefined ? 1 : options.order;
        //   this.controlType = options.controlType || '';
        //   this.type = options.type || '';
        //   this.options = options.options || [];
    }
}