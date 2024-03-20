import {AlignmentRequest, ClassIndexRequest, RacesRequest} from './requests';

export namespace NewPlayer {
  type BasicInfo = {
    character_name: string;
    player_name: string;
    alignment: AlignmentRequest;
    background: string;
    level: number;
    experience: number;
    class: ClassIndexRequest;
    race: RacesRequest;
  };

  type Race = {};
}
