import _ from "lodash";

export const twoLetterToThreeLetterCountryCode = async (twoLetterCountryCode) => {
  const country = _.find(mapping, ['twoLetterCode', _.upperCase(twoLetterCountryCode)]);
  return _.get(country, 'threeLetterCode');
}

const mapping = [{
  name: 'Afghanistan', twoLetterCode: 'AF', threeLetterCode: 'AFG', numeric: '004',
},
{
  name: 'Albania', twoLetterCode: 'AL', threeLetterCode: 'ALB', numeric: '008',
},
{
  name: 'Algeria', twoLetterCode: 'DZ', threeLetterCode: 'DZA', numeric: '012',
},
{
  name: 'American Samoa', twoLetterCode: 'AS', threeLetterCode: 'ASM', numeric: '016',
},
{
  name: 'Andorra', twoLetterCode: 'AD', threeLetterCode: 'AND', numeric: '020',
},
{
  name: 'Angola', twoLetterCode: 'AO', threeLetterCode: 'AGO', numeric: '024',
},
{
  name: 'Anguilla', twoLetterCode: 'AI', threeLetterCode: 'AIA', numeric: '660',
},
{
  name: 'Antarctica', twoLetterCode: 'AQ', threeLetterCode: 'ATA', numeric: '010',
},
{
  name: 'Antigua and Barbuda', twoLetterCode: 'AG', threeLetterCode: 'ATG', numeric: '028',
},
{
  name: 'Argentina', twoLetterCode: 'AR', threeLetterCode: 'ARG', numeric: '032',
},
{
  name: 'Armenia', twoLetterCode: 'AM', threeLetterCode: 'ARM', numeric: '051',
},
{
  name: 'Aruba', twoLetterCode: 'AW', threeLetterCode: 'ABW', numeric: '533',
},
{
  name: 'Australia', twoLetterCode: 'AU', threeLetterCode: 'AUS', numeric: '036',
},
{
  name: 'Austria', twoLetterCode: 'AT', threeLetterCode: 'AUT', numeric: '040',
},
{
  name: 'Azerbaijan', twoLetterCode: 'AZ', threeLetterCode: 'AZE', numeric: '031',
},
{
  name: 'Bahamas (the)', twoLetterCode: 'BS', threeLetterCode: 'BHS', numeric: '044',
},
{
  name: 'Bahrain', twoLetterCode: 'BH', threeLetterCode: 'BHR', numeric: '048',
},
{
  name: 'Bangladesh', twoLetterCode: 'BD', threeLetterCode: 'BGD', numeric: '050',
},
{
  name: 'Barbados', twoLetterCode: 'BB', threeLetterCode: 'BRB', numeric: '052',
},
{
  name: 'Belarus', twoLetterCode: 'BY', threeLetterCode: 'BLR', numeric: '112',
},
{
  name: 'Belgium', twoLetterCode: 'BE', threeLetterCode: 'BEL', numeric: '056',
},
{
  name: 'Belize', twoLetterCode: 'BZ', threeLetterCode: 'BLZ', numeric: '084',
},
{
  name: 'Benin', twoLetterCode: 'BJ', threeLetterCode: 'BEN', numeric: '204',
},
{
  name: 'Bermuda', twoLetterCode: 'BM', threeLetterCode: 'BMU', numeric: '060',
},
{
  name: 'Bhutan', twoLetterCode: 'BT', threeLetterCode: 'BTN', numeric: '064',
},
{
  name: 'Bolivia (Plurinational State of)', twoLetterCode: 'BO', threeLetterCode: 'BOL', numeric: '068',
},
{
  name: 'Bonaire, Sint Eustatius and Saba', twoLetterCode: 'BQ', threeLetterCode: 'BES', numeric: '535',
},
{
  name: 'Bosnia and Herzegovina', twoLetterCode: 'BA', threeLetterCode: 'BIH', numeric: '070',
},
{
  name: 'Botswana', twoLetterCode: 'BW', threeLetterCode: 'BWA', numeric: '072',
},
{
  name: 'Bouvet Island', twoLetterCode: 'BV', threeLetterCode: 'BVT', numeric: '074',
},
{
  name: 'Brazil', twoLetterCode: 'BR', threeLetterCode: 'BRA', numeric: '076',
},
{
  name: 'British Indian Ocean Territory (the)', twoLetterCode: 'IO', threeLetterCode: 'IOT', numeric: '086',
},
{
  name: 'Brunei Darussalam', twoLetterCode: 'BN', threeLetterCode: 'BRN', numeric: '096',
},
{
  name: 'Bulgaria', twoLetterCode: 'BG', threeLetterCode: 'BGR', numeric: '100',
},
{
  name: 'Burkina Faso', twoLetterCode: 'BF', threeLetterCode: 'BFA', numeric: '854',
},
{
  name: 'Burundi', twoLetterCode: 'BI', threeLetterCode: 'BDI', numeric: '108',
},
{
  name: 'Cabo Verde', twoLetterCode: 'CV', threeLetterCode: 'CPV', numeric: '132',
},
{
  name: 'Cambodia', twoLetterCode: 'KH', threeLetterCode: 'KHM', numeric: '116',
},
{
  name: 'Cameroon', twoLetterCode: 'CM', threeLetterCode: 'CMR', numeric: '120',
},
{
  name: 'Canada', twoLetterCode: 'CA', threeLetterCode: 'CAN', numeric: '124',
},
{
  name: 'Cayman Islands (the)', twoLetterCode: 'KY', threeLetterCode: 'CYM', numeric: '136',
},
{
  name: 'Central African Republic (the)', twoLetterCode: 'CF', threeLetterCode: 'CAF', numeric: '140',
},
{
  name: 'Chad', twoLetterCode: 'TD', threeLetterCode: 'TCD', numeric: '148',
},
{
  name: 'Chile', twoLetterCode: 'CL', threeLetterCode: 'CHL', numeric: '152',
},
{
  name: 'China', twoLetterCode: 'CN', threeLetterCode: 'CHN', numeric: '156',
},
{
  name: 'Christmas Island', twoLetterCode: 'CX', threeLetterCode: 'CXR', numeric: '162',
},
{
  name: 'Cocos (Keeling) Islands (the)', twoLetterCode: 'CC', threeLetterCode: 'CCK', numeric: '166',
},
{
  name: 'Colombia', twoLetterCode: 'CO', threeLetterCode: 'COL', numeric: '170',
},
{
  name: 'Comoros (the)', twoLetterCode: 'KM', threeLetterCode: 'COM', numeric: '174',
},
{
  name: 'Congo (the Democratic Republic of the)', twoLetterCode: 'CD', threeLetterCode: 'COD', numeric: '180',
},
{
  name: 'Congo (the)', twoLetterCode: 'CG', threeLetterCode: 'COG', numeric: '178',
},
{
  name: 'Cook Islands (the)', twoLetterCode: 'CK', threeLetterCode: 'COK', numeric: '184',
},
{
  name: 'Costa Rica', twoLetterCode: 'CR', threeLetterCode: 'CRI', numeric: '188',
},
{
  name: 'Croatia', twoLetterCode: 'HR', threeLetterCode: 'HRV', numeric: '191',
},
{
  name: 'Cuba', twoLetterCode: 'CU', threeLetterCode: 'CUB', numeric: '192',
},
{
  name: 'Curacao', twoLetterCode: 'CW', threeLetterCode: 'CUW', numeric: '531',
},
{
  name: 'Cyprus', twoLetterCode: 'CY', threeLetterCode: 'CYP', numeric: '196',
},
{
  name: 'Czechia', twoLetterCode: 'CZ', threeLetterCode: 'CZE', numeric: '203',
},
{
  name: 'CotedIvoire', twoLetterCode: 'CI', threeLetterCode: 'CIV', numeric: '384',
},
{
  name: 'Denmark', twoLetterCode: 'DK', threeLetterCode: 'DNK', numeric: '208',
},
{
  name: 'Djibouti', twoLetterCode: 'DJ', threeLetterCode: 'DJI', numeric: '262',
},
{
  name: 'Dominica', twoLetterCode: 'DM', threeLetterCode: 'DMA', numeric: '212',
},
{
  name: 'Dominican Republic (the)', twoLetterCode: 'DO', threeLetterCode: 'DOM', numeric: '214',
},
{
  name: 'Ecuador', twoLetterCode: 'EC', threeLetterCode: 'ECU', numeric: '218',
},
{
  name: 'Egypt', twoLetterCode: 'EG', threeLetterCode: 'EGY', numeric: '818',
},
{
  name: 'El Salvador', twoLetterCode: 'SV', threeLetterCode: 'SLV', numeric: '222',
},
{
  name: 'Equatorial Guinea', twoLetterCode: 'GQ', threeLetterCode: 'GNQ', numeric: '226',
},
{
  name: 'Eritrea', twoLetterCode: 'ER', threeLetterCode: 'ERI', numeric: '232',
},
{
  name: 'Estonia', twoLetterCode: 'EE', threeLetterCode: 'EST', numeric: '233',
},
{
  name: 'Eswatini', twoLetterCode: 'SZ', threeLetterCode: 'SWZ', numeric: '748',
},
{
  name: 'Ethiopia', twoLetterCode: 'ET', threeLetterCode: 'ETH', numeric: '231',
},
{
  name: 'Falkland Islands (the) [Malvinas]', twoLetterCode: 'FK', threeLetterCode: 'FLK', numeric: '238',
},
{
  name: 'Faroe Islands (the)', twoLetterCode: 'FO', threeLetterCode: 'FRO', numeric: '234',
},
{
  name: 'Fiji', twoLetterCode: 'FJ', threeLetterCode: 'FJI', numeric: '242',
},
{
  name: 'Finland', twoLetterCode: 'FI', threeLetterCode: 'FIN', numeric: '246',
},
{
  name: 'France', twoLetterCode: 'FR', threeLetterCode: 'FRA', numeric: '250',
},
{
  name: 'French Guiana', twoLetterCode: 'GF', threeLetterCode: 'GUF', numeric: '254',
},
{
  name: 'French Polynesia', twoLetterCode: 'PF', threeLetterCode: 'PYF', numeric: '258',
},
{
  name: 'French Southern Territories (the)', twoLetterCode: 'TF', threeLetterCode: 'ATF', numeric: '260',
},
{
  name: 'Gabon', twoLetterCode: 'GA', threeLetterCode: 'GAB', numeric: '266',
},
{
  name: 'Gambia (the)', twoLetterCode: 'GM', threeLetterCode: 'GMB', numeric: '270',
},
{
  name: 'Georgia', twoLetterCode: 'GE', threeLetterCode: 'GEO', numeric: '268',
},
{
  name: 'Germany', twoLetterCode: 'DE', threeLetterCode: 'DEU', numeric: '276',
},
{
  name: 'Ghana', twoLetterCode: 'GH', threeLetterCode: 'GHA', numeric: '288',
},
{
  name: 'Gibraltar', twoLetterCode: 'GI', threeLetterCode: 'GIB', numeric: '292',
},
{
  name: 'Greece', twoLetterCode: 'GR', threeLetterCode: 'GRC', numeric: '300',
},
{
  name: 'Greenland', twoLetterCode: 'GL', threeLetterCode: 'GRL', numeric: '304',
},
{
  name: 'Grenada', twoLetterCode: 'GD', threeLetterCode: 'GRD', numeric: '308',
},
{
  name: 'Guadeloupe', twoLetterCode: 'GP', threeLetterCode: 'GLP', numeric: '312',
},
{
  name: 'Guam', twoLetterCode: 'GU', threeLetterCode: 'GUM', numeric: '316',
},
{
  name: 'Guatemala', twoLetterCode: 'GT', threeLetterCode: 'GTM', numeric: '320',
},
{
  name: 'Guernsey', twoLetterCode: 'GG', threeLetterCode: 'GGY', numeric: '831',
},
{
  name: 'Guinea', twoLetterCode: 'GN', threeLetterCode: 'GIN', numeric: '324',
},
{
  name: 'Guinea-Bissau', twoLetterCode: 'GW', threeLetterCode: 'GNB', numeric: '624',
},
{
  name: 'Guyana', twoLetterCode: 'GY', threeLetterCode: 'GUY', numeric: '328',
},
{
  name: 'Haiti', twoLetterCode: 'HT', threeLetterCode: 'HTI', numeric: '332',
},
{
  name: 'Heard Island and McDonald Islands', twoLetterCode: 'HM', threeLetterCode: 'HMD', numeric: '334',
},
{
  name: 'Holy See (the)', twoLetterCode: 'VA', threeLetterCode: 'VAT', numeric: '336',
},
{
  name: 'Honduras', twoLetterCode: 'HN', threeLetterCode: 'HND', numeric: '340',
},
{
  name: 'Hong Kong', twoLetterCode: 'HK', threeLetterCode: 'HKG', numeric: '344',
},
{
  name: 'Hungary', twoLetterCode: 'HU', threeLetterCode: 'HUN', numeric: '348',
},
{
  name: 'Iceland', twoLetterCode: 'IS', threeLetterCode: 'ISL', numeric: '352',
},
{
  name: 'India', twoLetterCode: 'IN', threeLetterCode: 'IND', numeric: '356',
},
{
  name: 'Indonesia', twoLetterCode: 'ID', threeLetterCode: 'IDN', numeric: '360',
},
{
  name: 'Iran (Islamic Republic of)', twoLetterCode: 'IR', threeLetterCode: 'IRN', numeric: '364',
},
{
  name: 'Iraq', twoLetterCode: 'IQ', threeLetterCode: 'IRQ', numeric: '368',
},
{
  name: 'Ireland', twoLetterCode: 'IE', threeLetterCode: 'IRL', numeric: '372',
},
{
  name: 'Isle of Man', twoLetterCode: 'IM', threeLetterCode: 'IMN', numeric: '833',
},
{
  name: 'Israel', twoLetterCode: 'IL', threeLetterCode: 'ISR', numeric: '376',
},
{
  name: 'Italy', twoLetterCode: 'IT', threeLetterCode: 'ITA', numeric: '380',
},
{
  name: 'Jamaica', twoLetterCode: 'JM', threeLetterCode: 'JAM', numeric: '388',
},
{
  name: 'Japan', twoLetterCode: 'JP', threeLetterCode: 'JPN', numeric: '392',
},
{
  name: 'Jersey', twoLetterCode: 'JE', threeLetterCode: 'JEY', numeric: '832',
},
{
  name: 'Jordan', twoLetterCode: 'JO', threeLetterCode: 'JOR', numeric: '400',
},
{
  name: 'Kazakhstan', twoLetterCode: 'KZ', threeLetterCode: 'KAZ', numeric: '398',
},
{
  name: 'Kenya', twoLetterCode: 'KE', threeLetterCode: 'KEN', numeric: '404',
},
{
  name: 'Kiribati', twoLetterCode: 'KI', threeLetterCode: 'KIR', numeric: '296',
},
{
  name: "Korea (the Democratic People's Republic of)", twoLetterCode: 'KP', threeLetterCode: 'PRK', numeric: '408',
},
{
  name: 'Korea (the Republic of)', twoLetterCode: 'KR', threeLetterCode: 'KOR', numeric: '410',
},
{
  name: 'Kuwait', twoLetterCode: 'KW', threeLetterCode: 'KWT', numeric: '414',
},
{
  name: 'Kyrgyzstan', twoLetterCode: 'KG', threeLetterCode: 'KGZ', numeric: '417',
},
{
  name: "Lao People's Democratic Republic (the)", twoLetterCode: 'LA', threeLetterCode: 'LAO', numeric: '418',
},
{
  name: 'Latvia', twoLetterCode: 'LV', threeLetterCode: 'LVA', numeric: '428',
},
{
  name: 'Lebanon', twoLetterCode: 'LB', threeLetterCode: 'LBN', numeric: '422',
},
{
  name: 'Lesotho', twoLetterCode: 'LS', threeLetterCode: 'LSO', numeric: '426',
},
{
  name: 'Liberia', twoLetterCode: 'LR', threeLetterCode: 'LBR', numeric: '430',
},
{
  name: 'Libya', twoLetterCode: 'LY', threeLetterCode: 'LBY', numeric: '434',
},
{
  name: 'Liechtenstein', twoLetterCode: 'LI', threeLetterCode: 'LIE', numeric: '438',
},
{
  name: 'Lithuania', twoLetterCode: 'LT', threeLetterCode: 'LTU', numeric: '440',
},
{
  name: 'Luxembourg', twoLetterCode: 'LU', threeLetterCode: 'LUX', numeric: '442',
},
{
  name: 'Macao', twoLetterCode: 'MO', threeLetterCode: 'MAC', numeric: '446',
},
{
  name: 'Madagascar', twoLetterCode: 'MG', threeLetterCode: 'MDG', numeric: '450',
},
{
  name: 'Malawi', twoLetterCode: 'MW', threeLetterCode: 'MWI', numeric: '454',
},
{
  name: 'Malaysia', twoLetterCode: 'MY', threeLetterCode: 'MYS', numeric: '458',
},
{
  name: 'Maldives', twoLetterCode: 'MV', threeLetterCode: 'MDV', numeric: '462',
},
{
  name: 'Mali', twoLetterCode: 'ML', threeLetterCode: 'MLI', numeric: '466',
},
{
  name: 'Malta', twoLetterCode: 'MT', threeLetterCode: 'MLT', numeric: '470',
},
{
  name: 'Marshall Islands (the)', twoLetterCode: 'MH', threeLetterCode: 'MHL', numeric: '584',
},
{
  name: 'Martinique', twoLetterCode: 'MQ', threeLetterCode: 'MTQ', numeric: '474',
},
{
  name: 'Mauritania', twoLetterCode: 'MR', threeLetterCode: 'MRT', numeric: '478',
},
{
  name: 'Mauritius', twoLetterCode: 'MU', threeLetterCode: 'MUS', numeric: '480',
},
{
  name: 'Mayotte', twoLetterCode: 'YT', threeLetterCode: 'MYT', numeric: '175',
},
{
  name: 'Mexico', twoLetterCode: 'MX', threeLetterCode: 'MEX', numeric: '484',
},
{
  name: 'Micronesia (Federated States of)', twoLetterCode: 'FM', threeLetterCode: 'FSM', numeric: '583',
},
{
  name: 'Moldova (the Republic of)', twoLetterCode: 'MD', threeLetterCode: 'MDA', numeric: '498',
},
{
  name: 'Monaco', twoLetterCode: 'MC', threeLetterCode: 'MCO', numeric: '492',
},
{
  name: 'Mongolia', twoLetterCode: 'MN', threeLetterCode: 'MNG', numeric: '496',
},
{
  name: 'Montenegro', twoLetterCode: 'ME', threeLetterCode: 'MNE', numeric: '499',
},
{
  name: 'Montserrat', twoLetterCode: 'MS', threeLetterCode: 'MSR', numeric: '500',
},
{
  name: 'Morocco', twoLetterCode: 'MA', threeLetterCode: 'MAR', numeric: '504',
},
{
  name: 'Mozambique', twoLetterCode: 'MZ', threeLetterCode: 'MOZ', numeric: '508',
},
{
  name: 'Myanmar', twoLetterCode: 'MM', threeLetterCode: 'MMR', numeric: '104',
},
{
  name: 'Namibia', twoLetterCode: 'NA', threeLetterCode: 'NAM', numeric: '516',
},
{
  name: 'Nauru', twoLetterCode: 'NR', threeLetterCode: 'NRU', numeric: '520',
},
{
  name: 'Nepal', twoLetterCode: 'NP', threeLetterCode: 'NPL', numeric: '524',
},
{
  name: 'Netherlands (the)', twoLetterCode: 'NL', threeLetterCode: 'NLD', numeric: '528',
},
{
  name: 'New Caledonia', twoLetterCode: 'NC', threeLetterCode: 'NCL', numeric: '540',
},
{
  name: 'New Zealand', twoLetterCode: 'NZ', threeLetterCode: 'NZL', numeric: '554',
},
{
  name: 'Nicaragua', twoLetterCode: 'NI', threeLetterCode: 'NIC', numeric: '558',
},
{
  name: 'Niger (the)', twoLetterCode: 'NE', threeLetterCode: 'NER', numeric: '562',
},
{
  name: 'Nigeria', twoLetterCode: 'NG', threeLetterCode: 'NGA', numeric: '566',
},
{
  name: 'Niue', twoLetterCode: 'NU', threeLetterCode: 'NIU', numeric: '570',
},
{
  name: 'Norfolk Island', twoLetterCode: 'NF', threeLetterCode: 'NFK', numeric: '574',
},
{
  name: 'Northern Mariana Islands (the)', twoLetterCode: 'MP', threeLetterCode: 'MNP', numeric: '580',
},
{
  name: 'Norway', twoLetterCode: 'NO', threeLetterCode: 'NOR', numeric: '578',
},
{
  name: 'Oman', twoLetterCode: 'OM', threeLetterCode: 'OMN', numeric: '512',
},
{
  name: 'Pakistan', twoLetterCode: 'PK', threeLetterCode: 'PAK', numeric: '586',
},
{
  name: 'Palau', twoLetterCode: 'PW', threeLetterCode: 'PLW', numeric: '585',
},
{
  name: 'Palestine, State of', twoLetterCode: 'PS', threeLetterCode: 'PSE', numeric: '275',
},
{
  name: 'Panama', twoLetterCode: 'PA', threeLetterCode: 'PAN', numeric: '591',
},
{
  name: 'Papua New Guinea', twoLetterCode: 'PG', threeLetterCode: 'PNG', numeric: '598',
},
{
  name: 'Paraguay', twoLetterCode: 'PY', threeLetterCode: 'PRY', numeric: '600',
},
{
  name: 'Peru', twoLetterCode: 'PE', threeLetterCode: 'PER', numeric: '604',
},
{
  name: 'Philippines (the)', twoLetterCode: 'PH', threeLetterCode: 'PHL', numeric: '608',
},
{
  name: 'Pitcairn', twoLetterCode: 'PN', threeLetterCode: 'PCN', numeric: '612',
},
{
  name: 'Poland', twoLetterCode: 'PL', threeLetterCode: 'POL', numeric: '616',
},
{
  name: 'Portugal', twoLetterCode: 'PT', threeLetterCode: 'PRT', numeric: '620',
},
{
  name: 'Puerto Rico', twoLetterCode: 'PR', threeLetterCode: 'PRI', numeric: '630',
},
{
  name: 'Qatar', twoLetterCode: 'QA', threeLetterCode: 'QAT', numeric: '634',
},
{
  name: 'Republic of North Macedonia', twoLetterCode: 'MK', threeLetterCode: 'MKD', numeric: '807',
},
{
  name: 'Romania', twoLetterCode: 'RO', threeLetterCode: 'ROU', numeric: '642',
},
{
  name: 'Russian Federation (the)', twoLetterCode: 'RU', threeLetterCode: 'RUS', numeric: '643',
},
{
  name: 'Rwanda', twoLetterCode: 'RW', threeLetterCode: 'RWA', numeric: '646',
},
{
  name: 'Reunion', twoLetterCode: 'RE', threeLetterCode: 'REU', numeric: '638',
},
{
  name: 'Saint Barthelemy', twoLetterCode: 'BL', threeLetterCode: 'BLM', numeric: '652',
},
{
  name: 'Saint Helena, Ascension and Tristan da Cunha', twoLetterCode: 'SH', threeLetterCode: 'SHN', numeric: '654',
},
{
  name: 'Saint Kitts and Nevis', twoLetterCode: 'KN', threeLetterCode: 'KNA', numeric: '659',
},
{
  name: 'Saint Lucia', twoLetterCode: 'LC', threeLetterCode: 'LCA', numeric: '662',
},
{
  name: 'Saint Martin (French part)', twoLetterCode: 'MF', threeLetterCode: 'MAF', numeric: '663',
},
{
  name: 'Saint Pierre and Miquelon', twoLetterCode: 'PM', threeLetterCode: 'SPM', numeric: '666',
},
{
  name: 'Saint Vincent and the Grenadines', twoLetterCode: 'VC', threeLetterCode: 'VCT', numeric: '670',
},
{
  name: 'Samoa', twoLetterCode: 'WS', threeLetterCode: 'WSM', numeric: '882',
},
{
  name: 'San Marino', twoLetterCode: 'SM', threeLetterCode: 'SMR', numeric: '674',
},
{
  name: 'Sao Tome and Principe', twoLetterCode: 'ST', threeLetterCode: 'STP', numeric: '678',
},
{
  name: 'Saudi Arabia', twoLetterCode: 'SA', threeLetterCode: 'SAU', numeric: '682',
},
{
  name: 'Senegal', twoLetterCode: 'SN', threeLetterCode: 'SEN', numeric: '686',
},
{
  name: 'Serbia', twoLetterCode: 'RS', threeLetterCode: 'SRB', numeric: '688',
},
{
  name: 'Seychelles', twoLetterCode: 'SC', threeLetterCode: 'SYC', numeric: '690',
},
{
  name: 'Sierra Leone', twoLetterCode: 'SL', threeLetterCode: 'SLE', numeric: '694',
},
{
  name: 'Singapore', twoLetterCode: 'SG', threeLetterCode: 'SGP', numeric: '702',
},
{
  name: 'Sint Maarten (Dutch part)', twoLetterCode: 'SX', threeLetterCode: 'SXM', numeric: '534',
},
{
  name: 'Slovakia', twoLetterCode: 'SK', threeLetterCode: 'SVK', numeric: '703',
},
{
  name: 'Slovenia', twoLetterCode: 'SI', threeLetterCode: 'SVN', numeric: '705',
},
{
  name: 'Solomon Islands', twoLetterCode: 'SB', threeLetterCode: 'SLB', numeric: '090',
},
{
  name: 'Somalia', twoLetterCode: 'SO', threeLetterCode: 'SOM', numeric: '706',
},
{
  name: 'South Africa', twoLetterCode: 'ZA', threeLetterCode: 'ZAF', numeric: '710',
},
{
  name: 'South Georgia and the South Sandwich Islands', twoLetterCode: 'GS', threeLetterCode: 'SGS', numeric: '239',
},
{
  name: 'South Sudan', twoLetterCode: 'SS', threeLetterCode: 'SSD', numeric: '728',
},
{
  name: 'Spain', twoLetterCode: 'ES', threeLetterCode: 'ESP', numeric: '724',
},
{
  name: 'Sri Lanka', twoLetterCode: 'LK', threeLetterCode: 'LKA', numeric: '144',
},
{
  name: 'Sudan (the)', twoLetterCode: 'SD', threeLetterCode: 'SDN', numeric: '729',
},
{
  name: 'Suriname', twoLetterCode: 'SR', threeLetterCode: 'SUR', numeric: '740',
},
{
  name: 'Svalbard and Jan Mayen', twoLetterCode: 'SJ', threeLetterCode: 'SJM', numeric: '744',
},
{
  name: 'Sweden', twoLetterCode: 'SE', threeLetterCode: 'SWE', numeric: '752',
},
{
  name: 'Switzerland', twoLetterCode: 'CH', threeLetterCode: 'CHE', numeric: '756',
},
{
  name: 'Syrian Arab Republic', twoLetterCode: 'SY', threeLetterCode: 'SYR', numeric: '760',
},
{
  name: 'Taiwan (Province of China)', twoLetterCode: 'TW', threeLetterCode: 'TWN', numeric: '158',
},
{
  name: 'Tajikistan', twoLetterCode: 'TJ', threeLetterCode: 'TJK', numeric: '762',
},
{
  name: 'Tanzania, United Republic of', twoLetterCode: 'TZ', threeLetterCode: 'TZA', numeric: '834',
},
{
  name: 'Thailand', twoLetterCode: 'TH', threeLetterCode: 'THA', numeric: '764',
},
{
  name: 'Timor-Leste', twoLetterCode: 'TL', threeLetterCode: 'TLS', numeric: '626',
},
{
  name: 'Togo', twoLetterCode: 'TG', threeLetterCode: 'TGO', numeric: '768',
},
{
  name: 'Tokelau', twoLetterCode: 'TK', threeLetterCode: 'TKL', numeric: '772',
},
{
  name: 'Tonga', twoLetterCode: 'TO', threeLetterCode: 'TON', numeric: '776',
},
{
  name: 'Trinidad and Tobago', twoLetterCode: 'TT', threeLetterCode: 'TTO', numeric: '780',
},
{
  name: 'Tunisia', twoLetterCode: 'TN', threeLetterCode: 'TUN', numeric: '788',
},
{
  name: 'Turkey', twoLetterCode: 'TR', threeLetterCode: 'TUR', numeric: '792',
},
{
  name: 'Turkmenistan', twoLetterCode: 'TM', threeLetterCode: 'TKM', numeric: '795',
},
{
  name: 'Turks and Caicos Islands (the)', twoLetterCode: 'TC', threeLetterCode: 'TCA', numeric: '796',
},
{
  name: 'Tuvalu', twoLetterCode: 'TV', threeLetterCode: 'TUV', numeric: '798',
},
{
  name: 'Uganda', twoLetterCode: 'UG', threeLetterCode: 'UGA', numeric: '800',
},
{
  name: 'Ukraine', twoLetterCode: 'UA', threeLetterCode: 'UKR', numeric: '804',
},
{
  name: 'United Arab Emirates (the)', twoLetterCode: 'AE', threeLetterCode: 'ARE', numeric: '784',
},
{
  name: 'United Kingdom of Great Britain and Northern Ireland (the)', twoLetterCode: 'GB', threeLetterCode: 'GBR', numeric: '826',
},
{
  name: 'United States Minor Outlying Islands (the)', twoLetterCode: 'UM', threeLetterCode: 'UMI', numeric: '581',
},
{
  name: 'United States of America (the)', twoLetterCode: 'US', threeLetterCode: 'USA', numeric: '840',
},
{
  name: 'Uruguay', twoLetterCode: 'UY', threeLetterCode: 'URY', numeric: '858',
},
{
  name: 'Uzbekistan', twoLetterCode: 'UZ', threeLetterCode: 'UZB', numeric: '860',
},
{
  name: 'Vanuatu', twoLetterCode: 'VU', threeLetterCode: 'VUT', numeric: '548',
},
{
  name: 'Venezuela (Bolivarian Republic of)', twoLetterCode: 'VE', threeLetterCode: 'VEN', numeric: '862',
},
{
  name: 'Viet Nam', twoLetterCode: 'VN', threeLetterCode: 'VNM', numeric: '704',
},
{
  name: 'Virgin Islands (British)', twoLetterCode: 'VG', threeLetterCode: 'VGB', numeric: '092',
},
{
  name: 'Virgin Islands (U.S.)', twoLetterCode: 'VI', threeLetterCode: 'VIR', numeric: '850',
},
{
  name: 'Wallis and Futuna', twoLetterCode: 'WF', threeLetterCode: 'WLF', numeric: '876',
},
{
  name: 'Western Sahara', twoLetterCode: 'EH', threeLetterCode: 'ESH', numeric: '732',
},
{
  name: 'Yemen', twoLetterCode: 'YE', threeLetterCode: 'YEM', numeric: '887',
},
{
  name: 'Zambia', twoLetterCode: 'ZM', threeLetterCode: 'ZMB', numeric: '894',
},
{
  name: 'Zimbabwe', twoLetterCode: 'ZW', threeLetterCode: 'ZWE', numeric: '716',
},
{
  name: 'Aland Islands', twoLetterCode: 'AX', threeLetterCode: 'ALA', numeric: '248',
}];
