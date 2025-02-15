export type Environment = {
  site: {
    name: string;
    url: string;
  }
  company: CompanyConfig
}

export type CompanyConfig = {
  name: string;
  email: string;
  phone: {
    text: string;
    url: string;
  }
  legal: {
    ruc: string;
    name: string;
  }
  introduction: string;

  social: SocialIten[]
}

export type SocialIten = {
  social: "facebook",
  link: string;
}
