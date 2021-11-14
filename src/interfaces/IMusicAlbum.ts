import IMusicAlbumCategory from './IMusicAlbumCategory';

export default interface IMusicAlbum {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  "im:itemCount": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      }
    };
    attributes: {
      term: string;
      label: string;
    }
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    }
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    }
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    }
  };
  category: Partial<IMusicAlbumCategory>;
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
}