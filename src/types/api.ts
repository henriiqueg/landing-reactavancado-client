export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type TechIcon = {
  title: string
  icon: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModuleProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  button: {
    label: string
    url: string
  }
  benefits: string
}

export type SocialLinkProps = {
  title: string
  url: string
}

export type AuthorsProps = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  description: string
  socialLink: SocialLinkProps[]
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export interface ReviewsProps {
  name: string
  text: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFAQProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFAQ: SectionFAQProps
}
