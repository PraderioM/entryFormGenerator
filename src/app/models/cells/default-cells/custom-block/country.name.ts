import {TwoLineDropdown} from "../../two.lines.cell";
import {Dropdown, Option} from "../../form-entries/dropdown";

const dropdown: Dropdown = new Dropdown(
  'id_lname',
  [
    new Option('COUNTRY NAMES', true, '...'),
    new Option('Andorra', false, 'AD'),
    new Option('Argentina', false, 'AR'),
    new Option('Armenia', false, 'AM'),
    new Option('Australia', false, 'AU'),
    new Option('Austria', false, 'AT'),
    new Option('Azerbaijan', false, 'AZ'),
    new Option('Belarus', false, 'BY'),
    new Option('Belgium', false, 'BE'),
    new Option('Bosnia', false, 'BA'),
    new Option('Brasile', false, 'BR'),
    new Option('Brunei', false, 'BN'),
    new Option('Bulgaria', false, 'BG'),
    new Option('Canada', false, 'CA'),
    new Option('China', false, 'CN'),
    new Option('Cile', false, 'CL'),
    new Option('Colombia', false, 'CO'),
    new Option('Costa Rica', false, 'CR'),
    new Option('Croatia', false, 'HR'),
    new Option('Cuba', false, 'CU'),
    new Option('Cyprus', false, 'CY'),
    new Option('Czechia', false, 'CZ'),
    new Option('Denmark', false, 'DK'),
    new Option('Ecuador', false, 'EC'),
    new Option('Estonia', false, 'EE'),
    new Option('Finland', false, 'FI'),
    new Option('France', false, 'FR'),
    new Option('Germany', false, 'DE'),
    new Option('Greece', false, 'GR'),
    new Option('Guatemala', false, 'GT'),
    new Option('Hong Kong', false, 'HK'),
    new Option('Hungary', false, 'HU'),
    new Option('Iceland', false, 'IS'),
    new Option('India', false, 'IN'),
    new Option('Indonesia', false, 'ID'),
    new Option('Iran', false, 'IR'),
    new Option('Ireland', false, 'IE'),
    new Option('Israel', false, 'IL'),
    new Option('Italy', false, 'IT'),
    new Option('Japan', false, 'JP'),
    new Option('Kazakhstan', false, 'KZ'),
    new Option('Korea Popular Republic', false, 'KP'),
    new Option('Korea Republic', false, 'KR'),
    new Option('Laos', false, 'LA'),
    new Option('Latvia', false, 'LV'),
    new Option('Lithuania', false, 'LT'),
    new Option('Luxemburg', false, 'LU'),
    new Option('Macau', false, 'MO'),
    new Option('Macedonia', false, 'MK'),
    new Option('Madagascar', false, 'MG'),
    new Option('Malaysia', false, 'MY'),
    new Option('Mexico', false, 'MX'),
    new Option('Moldova', false, 'MD'),
    new Option('Mongolia', false, 'MN'),
    new Option('Morocco', false, 'MA'),
    new Option('Nepal', false, 'NP'),
    new Option('Netherlands', false, 'NL'),
    new Option('New Zealand', false, 'NZ'),
    new Option('Norway', false, 'NO'),
    new Option('Panama', false, 'PA'),
    new Option('Peru', false, 'PE'),
    new Option('Philippines', false, 'PH'),
    new Option('Poland', false, 'PL'),
    new Option('Portugal', false, 'PT'),
    new Option('Republic of Serbia', false, 'RS'),
    new Option('Romania', false, 'RO'),
    new Option('Russia', false, 'RU'),
    new Option('San Marino', false, 'SM'),
    new Option('Singapore', false, 'SG'),
    new Option('Slovakia', false, 'SK'),
    new Option('Slovenia', false, 'SI'),
    new Option('South Africa', false, 'ZA'),
    new Option('Spain', false, 'ES'),
    new Option('Sweden', false, 'SE'),
    new Option('Switzerland', false, 'CH'),
    new Option('Taiwan', false, 'TW'),
    new Option('Thailand', false, 'TH'),
    new Option('Turkey', false, 'TR'),
    new Option('Ukraine', false, 'UA'),
    new Option('United Kingdom', false, 'UK'),
    new Option('United States', false, 'US'),
    new Option('Unknown Country', false, 'XX'),
    new Option('Uruguay', false, 'UY'),
    new Option('Venezuela', false, 'VE'),
    new Option('Vietnam', false, 'VN'),
    new Option('Yugoslavia', false, 'YU'),
    new Option('No Such Code', false, '??')
  ],
  'The country code will take precedence.',
  'EXT-D-COUNTRY',
  '12em',
  null,
  null,
  'set_lcode()'
);

export const COUNTRY_NAME = new TwoLineDropdown('Country Name', dropdown);
