import {
  faBell,
  faFilter,
  faHeart,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ROUTE_CONSTANTS } from "./Routes";

export const COOKIES = {
  TOKEN_KEY: "auction-token",
  AUCTION_USER_KEY: "auction-user-data",
  AUCTION_FILTER: "auction-filter",
};

export const RANGE_PRICE = {
  MIN: "0",
  MAX: "100000000",
  STEPS: "100000",
};

export const FILTER_EMPTY = {
  // name: "",
  bank: "",
  location: "",
  category: "",
  price: [RANGE_PRICE.MIN, RANGE_PRICE.MAX],
  propertyType: "",
};

export const NAVICON_COLOR = "#a6a6a6";

export const PAGE_REVALIDATE_TIME = 86400; // 24 hr

export const STRING_DATA = {
  LOGIN_VIEW_DOC: "Login to view documents",
  HOME: "Home",
  SHOW_INTEREST: "Show interest",
  DELETE_ACCOUNT: "Delete account",
  EDIT_ALERT: "Edit alert",
  UPDATE_PASSWORD: "Update password",
  YOUR_ALERTS: "Your alerts",
  TOP_ASSETS: "Top assets",
  ASSETS: "Assets",
  SAVED: "Saved",
  SAVED_SEARCH: "Saved Search",
  SUBMIT: "Submit",
  CONTACT_FORM: "Contact form",
  EDIT_LIST: "Edit list",
  BORROW_NAME: "Borrow name",
  CONTACT: "Contact",
  CITIES: "Cities",
  BANKS: "Banks",
  CATEGORIES: "Categories",
  CATEGORIES_LOWER: "categories",
  TERMS_CONDITIONS: "Terms and condition",
  PRIVACY_POLICY: "Privacy policy",
  CONTACT_US: "Contact us",
  ABOUT_US: "About us",
  SITEMAP: "Sitemap",
  DELETE: "Delete",
  TOP_CATEGORIES: "Top categories",
  CATEGORY: "Category",
  TOP_BANKS: "Top banks",
  OTHER_CATEGORIES: "Other categories",
  OTHER_LOCATIONS: "Other location",
  OTHER_BANKS: "Other banks",
  REMOVE: "Remove",
  MESSAGE_PROCEED: "Are you sure you want to proceed?",
  CONFIRMATION: "Confirmation",
  ADD: "Add",
  ADD_LIST: "Add list",
  YOUR_LIST: "Your list",
  ALL: "All",
  BACK: "Back",
  EAUCTION_DEKHO: "eauctiondekho",
  EMPTY: "",
  LOGOUT: "Logout",
  ALREADY_HAVE_ACCOUNT: "Already have an account?",
  NOT_REGISTERED: "Not registered?",
  NOTICE: "Notice",
  LOGIN: "Login",
  DASHBOARD: "Dashboard",
  BRAND_NAME: "Auction",
  REGISTER: "Signup",
  CREATE_ACCOUNT: "Create Acount",
  SEARCH: "Search",
  TAG_LINE: "Find Auctions Near You",
  POPULER_CITIES: "Popular Cities",
  AUCTION: "Auction",
  UPDATE: "Update",
  CANCEL: "Cancel",
  AUCTION_DETAIL: "Auction Detail",
  ID_SLASH: "/:id",
  PROFILE: "Profile",
  SETTINGS: "Settings",
  DESCRIPTION: "Description",
  BANK: "Bank",
  PROPERTY_TYPE: "Property Type",
  AREA: "Area",
  POSSESSION: "Possession",
  LOCALITY: "Locality",
  CITY: "City",
  RESERVED_PRICE: "Reserved Price",
  EMD_AMOUNT: "EMD Amount",
  EMD_SUBMISSION: "EMD submission",
  AUCTION_START_D_AND_T: "Auction Start Date & Time",
  AUCTION_END_D_AND_T: "Auction End Date & Time",
  SIMILER_PROPERTIES: "Similer Properties",
  TOP_CITY: "Top City",
  TOP_CITIES: "Top Cities",
  SERVICE_PROVIDER: "Service provider",
  BRANCH_NAME: "Branch name",
  MANAGE_LIST: "Manage list",
  MANAGE_ALERT: "Manage alert",
  ADD_TO_LIST: "Add to list",
  NO_DATA_FOUND_LIST_PROPERTY:
    "No property added to the list. Please go to the property detail and add the property in your desired list",
  NO_DATA_FOUND_LIST:
    "You can organize your favorite properties by categorizing it into various lists",
  MANAGE_FILTERS: "Manage filter",
  YOUR_FILTERS: "Your filters",
  NO_SAVED_LIST_FOUND: "No saved search found",
  NO_ALERT_FOUND: "No alert found",
  DELETE_SEARCH_ITEM_MESSAGE:
    "Are you sure you want to delete this saved search ?",
  DELETE_ALERT_MESSAGE: "Are you sure you want to delete this alert ?",
  YOUR_WISHLIST: "Your wishlist",
  YOUR_SAVED_SEARCH: "Your saved search",
  LOCATIONS: "locations",
  ASSETS_TYPE: "asset-types",
  TYPES: "types",
};

export const NAVBAR_NAV_LINKS = [
  {
    path: ROUTE_CONSTANTS.PROFILE,
    label: STRING_DATA.PROFILE,
    icon: faUser,
  },
  {
    path: ROUTE_CONSTANTS.MANAGE_LIST,
    label: STRING_DATA.YOUR_WISHLIST,
    icon: faHeart,
  },
  {
    path: ROUTE_CONSTANTS.MANAGE_ALERT,
    label: STRING_DATA.YOUR_ALERTS,
    icon: faBell,
  },
  {
    path: ROUTE_CONSTANTS.MANAGE_FILTERS,
    label: STRING_DATA.YOUR_SAVED_SEARCH,
    icon: faFilter,
  },
];

export const INPUT_TYPE = {
  TEXT: "text",
  TEXT_AREA: "textarea",
  RANGE: "range",
  PASSWORD: "password",
  NUMBER: "number",
};

export const ERROR_MESSAGE = {
  CURRENT_PASSWORD: "Current password is required",
  NEW_PASSWORD_REQUIRED: "New password is required",
  ASSET_TYPE_REQ: "Asset type is required",
  EMAIL_REQUIRED: "Email is required",
  PASSWORD_REQUIRED: "Password is required",
  CATEGORY_REQUIRED: "Category is required",
  SUBJECT_REQUIRED: "Subject is required",
  MESSAGE_REQUIRED: "Message is required",
  LOCATION_REQUIRED: "Location is required",
  BANK_REQUIRED: "Bank is required",
  PRICE_REQUIRED: "Price is required",
  PRICE_POSITIVE: "Price must be a positive number",
  PRICE_INTEGER: "Price must be an integer",
  USERNAME: "Username is required",
  CONFIRM_PASSWORD: "Confirm password is required",
  MIN_2: "Please enter a name with at least 2 characters",
  MIN_6: "Your password must be at least 6 characters",
  MAX_PASS_30: "Password length should not exceed 30 characters",
  MAX_USERNAME_30: "Username should not exceed 30 characters",
  NAME_REQUIRED: "Name is required",
  MAX_NAME_30: "Name should not exceed 30 characters",
  PASSWORDS_MUST_MATCH: "Passwords must match",
  LIST_REQUIRED: "List is required",
  PHONE_REQUIRED: "Phone number is required",
  PHONE_NUMERIC: "Please enter numeric value",
  PHONE_LENGTH: "Please enter",
  MIN_PHONE_LENGTH: "Invalid number",
  EMAIL_INVALID: "Invalid email address",
  MOBILE_REQUIRED: "Mobile number is required",
};

export const NAV_LINKS = [
  {
    id: 1,
    label: STRING_DATA.PROFILE,
    path: ROUTE_CONSTANTS.PROFILE,
  },
  {
    id: 2,
    label: STRING_DATA.SETTINGS,
    path: ROUTE_CONSTANTS.SETTINGS,
  },
  {
    id: 3,
    label: STRING_DATA.LOGIN,
    path: ROUTE_CONSTANTS.LOGIN,
  },
  {
    id: 4,
    label: STRING_DATA.REGISTER,
    path: ROUTE_CONSTANTS.REGISTER,
  },
];

export const CATEGORIES = [
  {
    name: "All",
    id: 0,
  },
  {
    name: "Flat",
    id: 1,
  },
  {
    name: "Floor",
    id: 2,
  },
  {
    name: "House",
    id: 3,
  },
  {
    name: "Residential",
    id: 4,
  },
  {
    name: "Land",
    id: 5,
  },
  {
    name: "Plot",
    id: 6,
  },
  {
    name: "Site",
    id: 7,
  },
  {
    name: "Commercial",
    id: 8,
  },
  {
    name: "Office",
    id: 9,
  },
  {
    name: "Shop",
    id: 10,
  },
  {
    name: "Car",
    id: 11,
  },
  {
    name: "Plant",
    id: 12,
  },
  {
    name: "Machinery",
    id: 13,
  },
];

export const POPULER_CITIES = [
  {
    id: 1,
    label: "Jaipur",
    value: "Jaiput",
  },
  {
    id: 2,
    label: "Mumbai",
    value: "Mumbai",
  },
  {
    id: 3,
    label: "Delhi",
    value: "Delhi",
  },
  {
    id: 4,
    label: "Bangalore",
    value: "Bangalore",
  },
  {
    id: 5,
    label: "Chennai",
    value: "Chennai",
  },
];

export const SAMPLE_PLOT = [
  {
    id: 1,
    title: "Luxury Apartment in Manhattan",
    desc: "Luxurious apartment with stunning views Luxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious apartment with stunning viewsLuxurious ",
    price: "1465546",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
    view_auction_data: {
      bank_name: "IDFC FIRST Bank ",
      property: "Typeplot",
      area: "66.97 Sq Mtrs",
      possession: "physical",
      locality: "Kunvarda, Surat",
      city: "Surat",
      reserve_price: "1051200",
      emd_amount: "105120",
      emd_submission: "2024-02-28T12:07:32.466Z",
      auction_start_date_and_time: "2024-02-28T12:07:32.466Z",
      auction_end_date_and_time: "2024-02-28T12:07:32.466Z",
    },
  },
  {
    id: 2,
    title: "Cozy Cottage in the Countryside",
    desc: "Quaint cottage surrounded by nature",
    price: "14254623",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 3,
    title: "Modern Condo in Downtown",
    desc: "Chic condo in the heart of the city",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 4,
    title: "Beachfront Villa in Bali",
    desc: "Exquisite villa with private beach access",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 5,
    title: "Mountain Retreat in the Alps",
    desc: "Secluded retreat nestled in the mountains",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 6,
    title: "Historic Townhouse in London",
    desc: "Elegant townhouse with period features",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 7,
    title: "Riverside Cabin in the Woods",
    desc: "Rustic cabin overlooking a tranquil river",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 8,
    title: "Sky-High Penthouse in Dubai",
    desc: "Luxurious penthouse with panoramic city views",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 9,
    title: "Farmhouse with Vineyard in Tuscany",
    desc: "Idyllic farmhouse surrounded by vineyards",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
  {
    id: 10,
    title: "Lakefront Retreat in Canada",
    desc: "Serenity awaits at this lakefront retreat",
    price: "234234234",
    bank_name: "IDFC FIRST Bank ",
    date: "2024-02-28T12:07:32.466Z",
  },
];

export const SAMPLE_PLOT2 = [
  {
    id: 2,
    attributes: {
      propertyType: "Plot",
      location: "Fazilka",
      bankName: "State Bank of India",
      branchName: "Stressed Assets Management Branch",
      serviceProvider: "mstcecommerce.com",
      borrowerName: "M/s. Ganesh Rice Mills",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https://www.eauctionsindia.org/storage/properties/SBI17061803391752.jpg",
      authorisedOfficerContactPerson:
        "Mr. Satinderjit Singh, Mobile No. 8146295501",
      auctionDate: "2024-02-27T18:30:00.000Z",
      auctionStartTime: "2024-02-28T05:30:00.000Z",
      auctionEndDate: "2024-02-28T10:30:00.000Z",
      applicationSubmissionDate: "2024-02-26T18:30:00.000Z",
      reservePrice: 2000000,
      emd: 200000,
      createdAt: "2024-03-28T10:38:08.531Z",
      updatedAt: "2024-03-28T10:38:08.531Z",
      publishedAt: "2024-03-28T10:38:08.527Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 3,
    attributes: {
      propertyType: "Plot",
      location: "Fazilka",
      bankName: "State Bank of India",
      branchName: "Stressed Assets Management Branch",
      serviceProvider: "mstcecommerce.com",
      borrowerName: "M/s. Ganesh Rice Mills",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/SBI17061803391752.jpg",
      authorisedOfficerContactPerson:
        "Mr. Satinderjit Singh, Mobile No. 8146295501",
      auctionDate: "2024-02-27T18:30:00.000Z",
      auctionStartTime: "2024-02-28T05:30:00.000Z",
      auctionEndDate: "2024-02-28T10:30:00.000Z",
      applicationSubmissionDate: "2024-02-26T18:30:00.000Z",
      reservePrice: 3700000,
      emd: 370000,
      createdAt: "2024-03-28T10:38:11.853Z",
      updatedAt: "2024-03-28T10:38:11.853Z",
      publishedAt: "2024-03-28T10:38:11.850Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 4,
    attributes: {
      propertyType: "Land",
      location: "North 24 Parganas",
      bankName: "IDFC First Bank Ltd",
      branchName: "Registered office",
      serviceProvider: "Public Auction",
      borrowerName: "Shib Shankar Dey",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/IDFC17064455199637.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-02-28T18:30:00.000Z",
      auctionStartTime: "2024-02-29T05:30:00.000Z",
      auctionEndDate: "2024-02-28T07:30:00.000Z",
      applicationSubmissionDate: "2024-02-27T18:30:00.000Z",
      reservePrice: 4100200,
      emd: 410020,
      createdAt: "2024-03-28T10:40:03.938Z",
      updatedAt: "2024-03-28T10:40:03.938Z",
      publishedAt: "2024-03-28T10:40:03.937Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 5,
    attributes: {
      propertyType: "Plot",
      location: "Fazilka",
      bankName: "State Bank of India",
      branchName: "Stressed Assets Management Branch",
      serviceProvider: "mstcecommerce.com",
      borrowerName: "M/s. Ganesh Rice Mills",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/SBI17061803391752.jpg",
      authorisedOfficerContactPerson:
        "Mr. Satinderjit Singh, Mobile No. 8146295501",
      auctionDate: "2024-02-27T18:30:00.000Z",
      auctionStartTime: "2024-02-28T05:30:00.000Z",
      auctionEndDate: "2024-02-28T10:30:00.000Z",
      applicationSubmissionDate: "2024-02-26T18:30:00.000Z",
      reservePrice: 500000,
      emd: 50000,
      createdAt: "2024-03-28T10:40:07.655Z",
      updatedAt: "2024-03-28T10:40:07.655Z",
      publishedAt: "2024-03-28T10:40:07.654Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 6,
    attributes: {
      propertyType: "House",
      location: "Fazilka",
      bankName: "State Bank of India",
      branchName: "Stressed Assets Management Branch",
      serviceProvider: "mstcecommerce.com",
      borrowerName: "M/s. Ganesh Rice Mills",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/SBI17061803391752.jpg",
      authorisedOfficerContactPerson:
        "Mr. Satinderjit Singh, Mobile No. 8146295501",
      auctionDate: "2024-02-27T18:30:00.000Z",
      auctionStartTime: "2024-02-28T05:30:00.000Z",
      auctionEndDate: "2024-02-28T10:30:00.000Z",
      applicationSubmissionDate: "2024-02-26T18:30:00.000Z",
      reservePrice: 14200000,
      emd: 1420000,
      createdAt: "2024-03-28T10:40:11.372Z",
      updatedAt: "2024-03-28T10:40:11.372Z",
      publishedAt: "2024-03-28T10:40:11.371Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 7,
    attributes: {
      propertyType: "House",
      location: "Fazilka",
      bankName: "State Bank of India",
      branchName: "Stressed Assets Management Branch",
      serviceProvider: "mstcecommerce.com",
      borrowerName: "M/s. Ganesh Rice Mills",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/SBI17061803391752.jpg",
      authorisedOfficerContactPerson:
        "Mr. Satinderjit Singh, Mobile No. 8146295501",
      auctionDate: "2024-02-27T18:30:00.000Z",
      auctionStartTime: "2024-02-28T05:30:00.000Z",
      auctionEndDate: "2024-02-28T10:30:00.000Z",
      applicationSubmissionDate: "2024-02-26T18:30:00.000Z",
      reservePrice: 22800000,
      emd: 2280000,
      createdAt: "2024-03-28T10:40:14.071Z",
      updatedAt: "2024-03-28T10:40:14.071Z",
      publishedAt: "2024-03-28T10:40:14.070Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 8,
    attributes: {
      propertyType: "Flat",
      location: "North 24 Parganas",
      bankName: "Punjab National Bank",
      branchName: "New Delhi",
      serviceProvider: "Public Auction",
      borrowerName: "M/S Rays Food Products Pvt Ltd,",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/pnb-kolk17074803924415.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-04-08T18:30:00.000Z",
      auctionStartTime: "2024-04-09T06:00:00.000Z",
      auctionEndDate: "2024-04-09T08:00:00.000Z",
      applicationSubmissionDate: "2024-04-07T18:30:00.000Z",
      reservePrice: 11590200,
      emd: 1159020,
      createdAt: "2024-03-28T10:40:16.195Z",
      updatedAt: "2024-03-28T10:40:16.195Z",
      publishedAt: "2024-03-28T10:40:16.193Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 9,
    attributes: {
      propertyType: "Flat",
      location: "Kolkata",
      bankName: "Punjab National Bank",
      branchName: "New Delhi",
      serviceProvider: "Public Auction",
      borrowerName: "M/s V S Enterprises",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/pnb-kolk17074805249086.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-04-08T18:30:00.000Z",
      auctionStartTime: "2024-04-09T06:00:00.000Z",
      auctionEndDate: "2024-04-09T08:00:00.000Z",
      applicationSubmissionDate: "2024-04-07T18:30:00.000Z",
      reservePrice: 2452500,
      emd: 245250,
      createdAt: "2024-03-28T10:40:18.292Z",
      updatedAt: "2024-03-28T10:40:18.292Z",
      publishedAt: "2024-03-28T10:40:18.291Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 10,
    attributes: {
      propertyType: "Flat",
      location: "Kolkata",
      bankName: "Punjab National Bank",
      branchName: "New Delhi",
      serviceProvider: "Public Auction",
      borrowerName: "M/s V S Enterprises",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/pnb-kolk17074805249086.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-04-08T18:30:00.000Z",
      auctionStartTime: "2024-04-09T06:00:00.000Z",
      auctionEndDate: "2024-04-09T08:00:00.000Z",
      applicationSubmissionDate: "2024-04-07T18:30:00.000Z",
      reservePrice: 1854900,
      emd: 185490,
      createdAt: "2024-03-28T10:40:20.543Z",
      updatedAt: "2024-03-28T10:40:20.543Z",
      publishedAt: "2024-03-28T10:40:20.541Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 11,
    attributes: {
      propertyType: "Land And Building",
      location: "Kolkata",
      bankName: "Punjab National Bank",
      branchName: "New Delhi",
      serviceProvider: "Public Auction",
      borrowerName: "M/s Biswas Enterprise",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/pnb-ban17074810418048.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-04-08T18:30:00.000Z",
      auctionStartTime: "2024-04-09T06:00:00.000Z",
      auctionEndDate: "2024-04-09T08:00:00.000Z",
      applicationSubmissionDate: "2024-04-07T18:30:00.000Z",
      reservePrice: 6344100,
      emd: 634410,
      createdAt: "2024-03-28T10:43:03.643Z",
      updatedAt: "2024-03-28T10:43:03.643Z",
      publishedAt: "2024-03-28T10:43:03.639Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 12,
    attributes: {
      propertyType: "Flat",
      location: "Kolkata",
      bankName: "Punjab National Bank",
      branchName: "Circle Sastra Centre",
      serviceProvider: "Public Auction",
      borrowerName: "DEBJANI NANDY",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/PUNJAB11711621697907.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-26T18:30:00.000Z",
      auctionStartTime: "2024-05-27T06:00:00.000Z",
      auctionEndDate: "2024-05-27T08:00:00.000Z",
      applicationSubmissionDate: "2024-05-23T18:30:00.000Z",
      reservePrice: 2733300,
      emd: 273330,
      createdAt: "2024-03-28T10:43:07.367Z",
      updatedAt: "2024-03-28T10:43:07.367Z",
      publishedAt: "2024-03-28T10:43:07.365Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 13,
    attributes: {
      propertyType: "Flat",
      location: "Kolkata",
      bankName: "Punjab National Bank",
      branchName: "Circle Sastra Centre",
      serviceProvider: "Public Auction",
      borrowerName: "BHABANI PRASAD MUKHERJEE",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/PUNJAB217116218261723.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-26T18:30:00.000Z",
      auctionStartTime: "2024-05-27T06:00:00.000Z",
      auctionEndDate: "2024-05-27T08:00:00.000Z",
      applicationSubmissionDate: "2024-05-23T18:30:00.000Z",
      reservePrice: 17294000,
      emd: 1729400,
      createdAt: "2024-03-28T10:43:11.120Z",
      updatedAt: "2024-03-28T10:43:11.120Z",
      publishedAt: "2024-03-28T10:43:11.116Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 14,
    attributes: {
      propertyType: "Plot",
      location: "Osmanabad",
      bankName: "Cholamandalam Investment And Finance Company Limited",
      branchName: "Corporate Office  Chennai",
      serviceProvider: "auctionfocus.in",
      borrowerName: "VISHAL BHAGVAT NAIKWADE",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/CHOLA117110150601619.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-21T18:30:00.000Z",
      auctionStartTime: "2024-05-22T08:30:00.000Z",
      auctionEndDate: "2024-04-22T10:30:00.000Z",
      applicationSubmissionDate: "2024-04-20T18:30:00.000Z",
      reservePrice: 5674000,
      emd: 567400,
      createdAt: "2024-03-28T10:43:14.705Z",
      updatedAt: "2024-03-28T10:43:14.705Z",
      publishedAt: "2024-03-28T10:43:14.700Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 15,
    attributes: {
      propertyType: "Land",
      location: "Nilgiris",
      bankName: "Debts Recovery Tribunal",
      branchName: "Coimbatore",
      serviceProvider: "Public Auction",
      borrowerName: "Mr.H.B.Vasudevan",
      assetCategory: "Residential",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/DRT217107590051747.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-17T18:30:00.000Z",
      auctionStartTime: "2024-05-18T05:00:00.000Z",
      auctionEndDate: "2024-05-18T06:00:00.000Z",
      applicationSubmissionDate: "2024-04-16T18:30:00.000Z",
      reservePrice: 9093000,
      emd: 9010000,
      createdAt: "2024-03-28T10:43:18.463Z",
      updatedAt: "2024-03-28T10:43:18.463Z",
      publishedAt: "2024-03-28T10:43:18.461Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 16,
    attributes: {
      propertyType: "Plot",
      location: "Bokaro",
      bankName: "Debts Recovery Tribunal",
      branchName: "Ranchi",
      serviceProvider: "drt.auctiontiger.net",
      borrowerName: "M/s Royal Enterprises",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/DEBET117116012118393.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-15T18:30:00.000Z",
      auctionStartTime: "2024-05-16T05:30:00.000Z",
      auctionEndDate: "2024-05-16T06:30:00.000Z",
      applicationSubmissionDate: "2024-05-14T18:30:00.000Z",
      reservePrice: 3645000,
      emd: 364500,
      createdAt: "2024-03-28T10:43:22.227Z",
      updatedAt: "2024-03-28T10:43:22.227Z",
      publishedAt: "2024-03-28T10:43:22.223Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 17,
    attributes: {
      propertyType: "Car",
      location: "Trivandrum",
      bankName: "IndusInd Bank",
      branchName: "Edappally, Kochi",
      serviceProvider: "Public Auction",
      borrowerName: "Shuhaib S J",
      assetCategory: "Vehicle Auctions",
      auctionType: "Sarfaesi Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/indusind117109244118879.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-15T18:30:00.000Z",
      auctionStartTime: "2024-05-16T05:30:00.000Z",
      auctionEndDate: "2024-04-16T08:30:00.000Z",
      applicationSubmissionDate: "2024-04-14T18:30:00.000Z",
      reservePrice: 300000,
      emd: 30000,
      createdAt: "2024-03-28T10:43:25.461Z",
      updatedAt: "2024-03-28T10:43:25.461Z",
      publishedAt: "2024-03-28T10:43:25.459Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 18,
    attributes: {
      propertyType: "Commercial Shop",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Commercial",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T05:30:00.000Z",
      auctionEndDate: "2024-05-15T06:00:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 4400000,
      emd: 440000,
      createdAt: "2024-03-28T10:43:29.659Z",
      updatedAt: "2024-03-28T10:43:29.659Z",
      publishedAt: "2024-03-28T10:43:29.658Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 19,
    attributes: {
      propertyType: "House",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T06:00:00.000Z",
      auctionEndDate: "2024-05-15T06:30:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 3754000,
      emd: 380000,
      createdAt: "2024-03-28T10:43:32.899Z",
      updatedAt: "2024-03-28T10:43:32.899Z",
      publishedAt: "2024-03-28T10:43:32.895Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 20,
    attributes: {
      propertyType: "Plot",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T06:30:00.000Z",
      auctionEndDate: "2024-05-15T07:00:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 655000,
      emd: 60000,
      createdAt: "2024-03-28T10:43:36.157Z",
      updatedAt: "2024-03-28T10:43:36.157Z",
      publishedAt: "2024-03-28T10:43:36.153Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 21,
    attributes: {
      propertyType: "Plot",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T07:00:00.000Z",
      auctionEndDate: "2024-05-15T07:30:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 1683000,
      emd: 170000,
      createdAt: "2024-03-28T10:43:40.351Z",
      updatedAt: "2024-03-28T10:43:40.351Z",
      publishedAt: "2024-03-28T10:43:40.346Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 22,
    attributes: {
      propertyType: "House",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T08:00:00.000Z",
      auctionEndDate: "2024-05-15T08:30:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 1683000,
      emd: 170000,
      createdAt: "2024-03-28T10:43:43.612Z",
      updatedAt: "2024-03-28T10:43:43.612Z",
      publishedAt: "2024-03-28T10:43:43.609Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 23,
    attributes: {
      propertyType: "House",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T08:30:00.000Z",
      auctionEndDate: "2024-05-15T09:00:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 5825000,
      emd: 590000,
      createdAt: "2024-03-28T10:43:46.915Z",
      updatedAt: "2024-03-28T10:43:46.915Z",
      publishedAt: "2024-03-28T10:43:46.914Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 24,
    attributes: {
      propertyType: "Plot",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T09:00:00.000Z",
      auctionEndDate: "2024-05-15T09:30:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 1360000,
      emd: 140000,
      createdAt: "2024-03-28T10:43:50.281Z",
      updatedAt: "2024-03-28T10:43:50.281Z",
      publishedAt: "2024-03-28T10:43:50.277Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
  {
    id: 25,
    attributes: {
      propertyType: "House",
      location: "Mansa",
      bankName: "Debts Recovery Tribunal",
      branchName: "Chandigarh",
      serviceProvider: "bankeauctions.com / C1 India",
      borrowerName: "SAHIL SPINTEX LTD.",
      assetCategory: "Residential",
      auctionType: "DRT Auction",
      noticeLink:
        "https//www.eauctionsindia.org/storage/properties/Chandigarh-DRT17110808728277.jpg",
      authorisedOfficerContactPerson: null,
      auctionDate: "2024-05-14T18:30:00.000Z",
      auctionStartTime: "2024-05-15T09:30:00.000Z",
      auctionEndDate: "2024-05-15T10:00:00.000Z",
      applicationSubmissionDate: "2024-05-13T18:30:00.000Z",
      reservePrice: 2600000,
      emd: 260000,
      createdAt: "2024-03-28T10:43:53.519Z",
      updatedAt: "2024-03-28T10:43:53.519Z",
      publishedAt: "2024-03-28T10:43:53.516Z",
      title: null,
      contactNo: null,
      auctionId: null,
      description: null,
    },
  },
];

export const REACT_QUERY = {
  COUNTRIES: "Countries",
  HOME_BOX_COLLETIONS: "Home-box-collections",
  CATEGORY_BOX_COLLECITON: "Categroy-box-collection",
  CATEGORY_BOX_COLLECITON_OPTIONS: "Categroy-box-collection-options",
  AUCTION_BANKS: "Auction-bank",
  AUCTION_LOCATION: "Auction-location",
  FAVOURITE_LIST: "Favourite-list",
  FAVOURITE_LIST_PROPERTY: "Favourite-list-property",
  FIND_AUCTION: "Find-auction",
  AUCTION_DETAIL: "auction-detail",
  ASSETS_TYPE: "Assets-type",
  AUCTION_LOCATION_ALL: "Auction-location-all",
  SAVED_SEARCH: "Saved-search",
  ALERTS: "Alerts",
  CATEGORY_ASSETS_TYPE: "Category-Assets-type",
};

export const SAMPLE_CITY = [
  { id: 1, label: "Delhi", value: "Delhi" },
  { id: 2, label: "Bangalore", value: "Bangalore" },
  { id: 3, label: "Hyderabad", value: "Hyderabad" },
  { id: 4, label: "Chennai", value: "Chennai" },
  { id: 5, label: "Kolkata", value: "Kolkata" },
  { id: 6, label: "Pune", value: "Pune" },
  { id: 7, label: "Ahmedabad", value: "Ahmedabad" },
  { id: 8, label: "Jaipur", value: "Jaipur" },
  { id: 9, label: "Lucknow", value: "Lucknow" },
  { id: 10, label: "Mumbai", value: "Mumbai" },
];

export const getEmptyAllObject = () => ({
  value: "",
  label: STRING_DATA.ALL,
});
