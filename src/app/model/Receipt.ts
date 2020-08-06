import {Shop} from "./Shop";

export class Receipt {
  id: number; // required
  date: Date; // required
  fiscalDriveNumber: string;  // required
  fiscalDocumentNumber: number; // required
  fiscalSign: number; // required
  totalSum: number; // required
  shop: Shop;
  requestNumber: number;
  shiftNumber: number;
  // "operationType": null,
  taxationType: number;
  operator: string;
  kktRegId: string;
  // retailPlaceAddress: null,
  // "items": [],
  // "stornoItems": [],
  // "modifiers": [],
  nds18: number;
  nds10: number;
  nds0: number;
  ndsNo: number; // boolean
  ndsCalculated18: number;
  ndsCalculated10: number;
  cashTotalSum: number;
  ecashTotalSum: number;
}
