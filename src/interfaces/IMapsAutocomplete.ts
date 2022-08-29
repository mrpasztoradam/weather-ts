export interface IMapsAutocomplete {
  predictions: IPrediction[];
  status: string;
}

export interface IPrediction {
  description: string;
  matched_substrings: IMatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: IStructuredFormatting;
  terms: ITerm[];
  types: string[];
}

export interface ITerm {
  offset: number;
  value: string;
}

export interface IStructuredFormatting {
  main_text: string;
  main_text_matched_substrings: IMatchedSubstring[];
  secondary_text: string;
}

export interface IMatchedSubstring {
  length: number;
  offset: number;
}
