interface HeaderCenteredText {
  text: string;
  subText: string;
}

interface Countdown {
  date: string;
  text?: string;
}

interface Event {
  dateStr: string;
  timeStr: string;
  icon: string;
  title?: string;
  description?: string;
  address: string;
  mapsLink: string;
  iframeMap?: string;
}

interface DressCode {
  description: string;
  modalTitle?: string;
  tips?: string[];
  menDetails: string[];
  womenDetails: string[];
  ModalFooterNote?: string;
  examplesLink?: string;
}

interface Rsvp {
  message: string;
  note?: string;
  link: string;
  calendarLink: string;
}

interface Music {
  youtube?: string;
  spotify?: string;
}

interface BankInfo {
  bank: string;
  countNumber?: string;
  countType?: string;
  id?: string;
  name?: string;
  email?: string;
  SWIFT?: string;
}

interface Gift {
  message: string;
  bankInfo: BankInfo[];
}

interface UsefulInfoItem {
  text: string;
  link?: string;
  linkText?: string;
}

interface UsefulInfoDetail {
  title: string;
  list: UsefulInfoItem[];
}

interface UsefulInfo {
  title: string;
  description: string;
  details: UsefulInfoDetail[];
}

interface Data {
  pageTitle: string;
  pageDescription: string;
  headerTitle?: string;
  headerSubtitle?: string;
  headerCenteredText?: HeaderCenteredText;
  countdown: Countdown;
  events: Event[];
  dressCode: DressCode;
  rsvp: Rsvp;
  music: Music;
  gift: Gift;
  usefulInfo: UsefulInfo;
  footerText: string;
}
