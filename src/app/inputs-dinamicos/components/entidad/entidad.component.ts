import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.scss']
})
export class EntidadComponent implements OnInit {
  public hola: string;
  public conceptosFormGroup: FormGroup;

  DATA = [
    {
        "fixCampo": false,
        "idCatalogoAnswers": null,
        "idCampos": 68005,
        "catalogoAnswers": [],
        "text": null,
        "label": "Fecha llegada ",
        "idEntidadG": null,
        "idCampoExtra": 385,
        "type": "date",
        "idTipoEntidad": null,
        "value": 1577858400000,
        "idCampoType": 35
    },
    {
        "fixCampo": false,
        "idCatalogoAnswers": null,
        "idCampos": 68006,
        "catalogoAnswers": [],
        "text": "adasdasdasdasdkaksdlkakslpdkalspkdlpaskdlaskdlaskdlakdlasdasd",
        "label": "Comentarios",
        "idEntidadG": null,
        "idCampoExtra": 386,
        "type": "textarea",
        "idTipoEntidad": null,
        "value": "ok",
        "idCampoType": 41
    },
    {
        "idCatalogoAnswers": 150,
        "idCampos": 68007,
        "label": "Servicio",
        "type": "lista",
        "idTipoEntidad": null,
        "idCampoType": 38,
        "fixCampo": false,
        "catalogoAnswers": [
            {
                "idCatalogo": 36,
                "orderType": "D",
                "default": false,
                "scoreAnswer": 1,
                "idCatalogoAnswer": 148,
                "label": "SA012019"
            },
            {
                "idCatalogo": 36,
                "orderType": "D",
                "default": false,
                "scoreAnswer": 2,
                "idCatalogoAnswer": 149,
                "label": "PC032019"
            },
            {
                "idCatalogo": 36,
                "orderType": "D",
                "default": false,
                "scoreAnswer": 3,
                "idCatalogoAnswer": 150,
                "label": "CC052019"
            },
            {
                "idCatalogo": 36,
                "orderType": "D",
                "default": false,
                "scoreAnswer": 4,
                "idCatalogoAnswer": 151,
                "label": "GA012019"
            }
        ],
        "catalogo": {
            "idCatalogo": 150,
            "scoreAnswer": 3,
            "idCatalogoAnswer": 150,
            "label": "CC052019"
        },
        "text": null,
        "idEntidadG": null,
        "idCampoExtra": 387,
        "value": null
    },
    {
        "idCatalogoAnswers": null,
        "direccion": {
            "idDireccion": 27319,
            "latitud": 25.667625,
            "longitud": -100.312846,
            "estado": "Nuevo León",
            "ciudad": "Monterrey",
            "calle": "Paras 850",
            "nombre": "Paras 850, Centro, 64000 Monterrey, N.L., México",
            "colonia": "Centro",
            "codigopostal": "64000",
            "pais": "México"
        },
        "idCampos": 68020,
        "label": "Origen",
        "type": "direccion",
        "idTipoEntidad": null,
        "idCampoType": 37,
        "fixCampo": false,
        "idDireccion": 27319,
        "catalogoAnswers": [],
        "text": null,
        "idEntidadG": null,
        "idCampoExtra": 388,
        "value": null
    }
]
addConcepto(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
