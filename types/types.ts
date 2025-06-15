export interface Images {
  image: string[]
}

export interface RelObject {
  slug: string
  count: number
  name: string
}

export interface Car {
  mark_id: string
  folder_id: string
  modification_id: string
  complectation_name: string
  body_type: string
  wheel: string
  color: string
  metallic: string
  availability: string
  custom: string
  state: string
  owners_number: string
  run: number
  year: number
  registry_year: number
  currency: string
  vin: string
  price: number
  credit_discount?: number
  insurance_discount?: number
  tradein_discount?: number
  max_discount?: number
  extras: string
  images: Images
  video?: string
  booking_allowed: boolean
  pts: string
  unique_id: number
  exchange: string
  tech_param_id: number
  engine_volume: number
  engine_power: string
  engine_type: string
  gearbox: string
  drive: string
  model_name: string
  generation_name: string
  mark_cyrillic_name: string
  model_cyrillic_name: string
  offer_type: string
  updated_at: string
  generation_rel: RelObject
  brand_rel: RelObject
  model_rel: RelObject
  images_amount: number
  engine_type_eng: string
  engine_power_num: number
  body_type_eng: string
  owners_number_num: number
  color_eng: string
  gearbox_eng: string
}

export interface Meta {
  limit: number
  page: number
  total_no_filters: number
  count: number
  total: number
  last_page: number
  prev_page_link?: string
  first_page_link: string
  next_page_link: string
  last_page_link: string
  from: number
  to: number
}

export interface Response {
  data: Car[]
  meta: Meta
}
