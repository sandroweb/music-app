import IInfoLabel from "./IInfoLabel";
import IMusicAlbum from "./IMusicAlbum";

export default interface IMusicAlbums {
  feed: {
    author: {
      name: IInfoLabel;
      uri: IInfoLabel;
    };
    entry: IMusicAlbum[];
    updated: IInfoLabel;
    rights: IInfoLabel;
    title: IInfoLabel;
    icon: IInfoLabel;
    link: {
      attributes: {
        rel: string;
        type: string;
        href: string;
      }
    };
    id: IInfoLabel;
  }
}