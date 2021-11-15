import IMusicAlbum from "interfaces/IMusicAlbum";

export interface MainContext {
  reload: () => void;
  albums: IMusicAlbum[];
  firstLoading: boolean;
}