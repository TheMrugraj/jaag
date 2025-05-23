// Sample data for profile cards
const profileData = [
    {
      "id": 1,
      "name": "Sandip Rajput",
      "year": "2006",
      "designation": "SSO",
      "tags": [
        "New delhi",
        "Job",
        "Defense & Security"
      ]
    },
    {
      "id": 19,
      "name": "Mrudul Modh",
      "year": "2006",
      "designation": "CEO",
      "tags": [
        "Gandhinagar",
        "Business",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 54,
      "name": "Patel Tarunaben",
      "year": "2006",
      "designation": "Assistant Teacher",
      "tags": [
        "Mahesana",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 97,
      "name": "Bharat Chaudhary",
      "year": "2006",
      "designation": "Talati",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 99,
      "name": "Hetal Chaudhary",
      "year": "2006",
      "designation": "Dy. Mamlatdar",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 101,
      "name": "Anita Goswami",
      "year": "2006",
      "designation": "IT manager",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 131,
      "name": "Suresh Ajmalbhai Patel",
      "year": "2006",
      "designation": "PORTFOLIO CREDIT MANAGER MBL",
      "tags": [
        "DEODAR",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 169,
      "name": "Madhavi  Patel",
      "year": "2006",
      "designation": "Registered Pharmacist",
      "tags": [
        "Ottawa, Canada",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 4,
      "name": "Hemant N.Thakor",
      "year": "2007",
      "designation": "Class-2 Officer, (JTP,  TownPlanningandValuationDepartment)",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 53,
      "name": "Kirankumar Chaudhary",
      "year": "2007",
      "designation": "Assistant motor vehicle inspector",
      "tags": [
        "GANDHI NAGAR",
        "Job",
        "Sports & Fitness"
      ]
    },
    {
      "id": 70,
      "name": "Bhavesh Rathod",
      "year": "2007",
      "designation": "QA Auditor",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 88,
      "name": "Shashi Vaghela",
      "year": "2007",
      "designation": "Superintending Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 89,
      "name": "Nikul Patel",
      "year": "2007",
      "designation": "Mutual fund distributor, Financial planner and insurance advisor",
      "tags": [
        "Gandhinagar",
        "Business",
        "⁠Financial Services"
      ]
    },
    {
      "id": 119,
      "name": "Vaibhavi Vandan Mehta",
      "year": "2007",
      "designation": "Laboratory Technician( FORENSIC SCIENCE LABORATORY)",
      "tags": [
        "Ahmedabad",
        "Job",
        "Law & Judiciary"
      ]
    },
    {
      "id": 136,
      "name": "Ankit Chauhan",
      "year": "2007",
      "designation": "CEO",
      "tags": [
        "Ahmedabad",
        "Business",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 161,
      "name": "Chaudhary Vishnubhai Fuljibhai",
      "year": "2007",
      "designation": "Police Constable",
      "tags": [
        "Vadodara",
        "Job",
        "Defense & Security"
      ]
    },
    {
      "id": 2,
      "name": "Bhadresh Patel",
      "year": "2008",
      "designation": "Director",
      "tags": [
        "Gandhinagar",
        "Business",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 3,
      "name": "Nidhi Kishan Pandya",
      "year": "2008",
      "designation": "Class 2 Gazzated officer, Child Development Project Officer, women & child Development Department,Government Of Gujarat",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 13,
      "name": "Bhadresh Narottambhai Patel",
      "year": "2008",
      "designation": "Sr.Executive",
      "tags": [
        "Ahemdabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 15,
      "name": "Bhumika Vaghela",
      "year": "2008",
      "designation": "Police sub inspector",
      "tags": [
        "Surat",
        "Job",
        "Defense & Security"
      ]
    },
    {
      "id": 35,
      "name": "Dr Aruna  Patel",
      "year": "2008",
      "designation": "BHMS doctor",
      "tags": [
        "Talod",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 52,
      "name": "Krimi Gandhi",
      "year": "2008",
      "designation": "Manager",
      "tags": [
        "Mumbai",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 59,
      "name": "Parmar Jyoti",
      "year": "2008",
      "designation": "Laboratory technician",
      "tags": [
        "Mehshana",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 61,
      "name": "Hemangini Patel",
      "year": "2008",
      "designation": "Assistant manager",
      "tags": [
        "Dahegham",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 64,
      "name": "Iftekhar Dani",
      "year": "2008",
      "designation": "Senior Software Engineer",
      "tags": [
        "Chhala, Ta & Dist - Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 65,
      "name": "Hardik Patel",
      "year": "2008",
      "designation": "Psi",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 66,
      "name": "Dhara Patel",
      "year": "2008",
      "designation": "Senior executive",
      "tags": [
        "Ahmedabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 73,
      "name": "Jagruti V Chavada",
      "year": "2008",
      "designation": "Accountant",
      "tags": [
        "Ahmedbad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 76,
      "name": "Gunjan Bodat",
      "year": "2008",
      "designation": "Branch Manager",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 87,
      "name": "Divyang Patel",
      "year": "2008",
      "designation": "Product Manager",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 108,
      "name": "Parthendrasinh Vaghela",
      "year": "2008",
      "designation": "Police inspector",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 120,
      "name": "Sanjay Solanki",
      "year": "2008",
      "designation": "Supervisor Instructor",
      "tags": [
        "Sampa Dehgam",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 123,
      "name": "Pranav Goswami",
      "year": "2008",
      "designation": "Heavy Equipment Operator",
      "tags": [
        "Longlac",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 163,
      "name": "Hemant Kumavat",
      "year": "2008",
      "designation": "Mobile Shop Owner",
      "tags": [
        "Ahmedabad",
        "Business",
        "Skilled Trades & Technical Services"
      ]
    },
    {
      "id": 179,
      "name": "Jaydeep Gohil",
      "year": "2008",
      "designation": "BI Sr. Consultant",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 33,
      "name": "Neha Rathod",
      "year": "2009",
      "designation": "Scale 1 officer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 42,
      "name": "Jurjun Patel",
      "year": "2009",
      "designation": "Clerk",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 50,
      "name": "Abhishek Saksena",
      "year": "2010",
      "designation": "Deputy Cluster Manager",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 75,
      "name": "Hardik Patel",
      "year": "2009",
      "designation": "QA Head",
      "tags": [
        "Sanand",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 85,
      "name": "Rahul Ambaliya",
      "year": "2009",
      "designation": "Deputy manager",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 90,
      "name": "Mrugrajsinh Vansadia",
      "year": "2009",
      "designation": "Product Engineering Head",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 17,
      "name": "Vishal Indrapuri",
      "year": "2010",
      "designation": "Deputy Manager",
      "tags": [
        "Kalol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 21,
      "name": "Nilesh Parmar",
      "year": "2010",
      "designation": "Government Service",
      "tags": [
        "Gandhi Nagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 37,
      "name": "Parth Patel",
      "year": "2010",
      "designation": "Sales Engineer",
      "tags": [
        "Vijapur",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 43,
      "name": "Shashikant Prajapati",
      "year": "2010",
      "designation": "Planning Engineer",
      "tags": [
        "Mansa",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 81,
      "name": "Rahul Patel",
      "year": "2010",
      "designation": "Deputy Section Officer",
      "tags": [
        "Dehgam, Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 82,
      "name": "Maulin Patel",
      "year": "2010",
      "designation": "ASI",
      "tags": [
        "GANDHINAGAR",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 84,
      "name": "Rashmika Patvari",
      "year": "2010",
      "designation": "DYSO",
      "tags": [
        "Sanand",
        "Business",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 91,
      "name": "Dr.Nirali Vansadia",
      "year": "2010",
      "designation": "Dentist",
      "tags": [
        "Sanand, Ahmedabad",
        "Business",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 109,
      "name": "Nikhil Desai",
      "year": "2010",
      "designation": "J.clerck",
      "tags": [
        "Halisha",
        "Job",
        "Skilled Trades & Technical Services"
      ]
    },
    {
      "id": 133,
      "name": "Hitesh Solanki",
      "year": "2010",
      "designation": "Police sub inspector",
      "tags": [
        "Chandkheda, Ahmedabad",
        "Job",
        "Defense & Security"
      ]
    },
    {
      "id": 180,
      "name": "Prabhash Singh",
      "year": "2010",
      "designation": "Executive - Projects",
      "tags": [
        "Ankleshwar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 5,
      "name": "Jaykumar Patel",
      "year": "2011",
      "designation": "",
      "tags": [
        "Pune",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 7,
      "name": "Dixit Patel",
      "year": "2011",
      "designation": "",
      "tags": [
        "Ahmedabad",
        "Business",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 29,
      "name": "Parth Banker",
      "year": "2011",
      "designation": "Doctor",
      "tags": [
        "Ahmedabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 62,
      "name": "Sagar Rana",
      "year": "2011",
      "designation": "Director",
      "tags": [
        "Ahmedabad",
        "Business",
        "Real Estate & Construction"
      ]
    },
    {
      "id": 74,
      "name": "Sujeet Pandit",
      "year": "2011",
      "designation": "Specialist Software Engineer",
      "tags": [
        "Kalol, Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 79,
      "name": "Salmankhan Khanjada",
      "year": "2011",
      "designation": "Self Employed",
      "tags": [
        "Anand",
        "Business",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 83,
      "name": "Jaydeep Chavada",
      "year": "2011",
      "designation": "SHALBY LIMITED",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 86,
      "name": "Apurva Gurjar",
      "year": "2011",
      "designation": "Doctor. MD Medicine",
      "tags": [
        "halisa",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 93,
      "name": "Parth Patel",
      "year": "2011",
      "designation": "CEO",
      "tags": [
        "Kalol",
        "Business",
        "Real Estate & Construction"
      ]
    },
    {
      "id": 94,
      "name": "Avinash Solanki",
      "year": "2011",
      "designation": "Sr Security engineer",
      "tags": [
        "Hyderabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 95,
      "name": "Nimesh Prajapati",
      "year": "2011",
      "designation": "Owner",
      "tags": [
        "Ahmedabad",
        "Business",
        "Real Estate & Construction"
      ]
    },
    {
      "id": 96,
      "name": "Bhavesh Maheriya",
      "year": "2011",
      "designation": "POSTAL ASSISTANT",
      "tags": [
        "Gandhinagar",
        "Job",
        "Sports & Fitness"
      ]
    },
    {
      "id": 100,
      "name": "Nikunj Rana",
      "year": "2011",
      "designation": "AMC clerk",
      "tags": [
        "AHMEDABAD",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 67,
      "name": "Mayuri Patel",
      "year": "2012",
      "designation": "Analyst",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 68,
      "name": "Arti Chaudhary",
      "year": "2012",
      "designation": "State Tax Inspector",
      "tags": [
        "gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 103,
      "name": "Satish Patel",
      "year": "2012",
      "designation": "Under Secretary",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 104,
      "name": "Namrata Vashi",
      "year": "2012",
      "designation": "AAE",
      "tags": [
        "Suret",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 166,
      "name": "Sandip Chopada",
      "year": "2012",
      "designation": "OWNER",
      "tags": [
        "VADODARA",
        "Business",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 182,
      "name": "Nisha Chaudhary",
      "year": "2012",
      "designation": "Staff nurse",
      "tags": [
        "Chhala GANDHINAGAR",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 183,
      "name": "Bhumika Parmar",
      "year": "2012",
      "designation": "Assistant manager",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 184,
      "name": "Nibhaba Raol",
      "year": "2012",
      "designation": "Clerk",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 6,
      "name": "Sandip Surti",
      "year": "2013",
      "designation": "",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 58,
      "name": "Karan Desai",
      "year": "2013",
      "designation": "Assistant professor",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 60,
      "name": "Arunkumar Barot",
      "year": "2013",
      "designation": "Salesman",
      "tags": [
        "Gandhidham",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 118,
      "name": "Ravi Desai",
      "year": "2013",
      "designation": "Senior Clerk",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 135,
      "name": "Prit Shah",
      "year": "2013",
      "designation": "Self employed",
      "tags": [
        "Rakhiyal",
        "Business",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 137,
      "name": "Sagar",
      "year": "2013",
      "designation": "Project engineer",
      "tags": [
        "Ahmedabad/nikol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 141,
      "name": "Kuldip Chaudhari",
      "year": "2013",
      "designation": "Application Engineer",
      "tags": [
        "Chennai",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 8,
      "name": "Jafarali Suthar",
      "year": "2014",
      "designation": "",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 51,
      "name": "Paresh Shah",
      "year": "2014",
      "designation": "Team leader",
      "tags": [
        "Naroda, Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 63,
      "name": "Jaimin Prajapati",
      "year": "2014",
      "designation": "Doctor",
      "tags": [
        "Talod",
        "Business",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 72,
      "name": "Kartik Patel",
      "year": "2014",
      "designation": "Engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 147,
      "name": "Kaushik Desai",
      "year": "2014",
      "designation": "Sales Head",
      "tags": [
        "Ahmedabad",
        "Business",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 150,
      "name": "Ankur Patel",
      "year": "2014",
      "designation": "Asst. Manager Account & Finance",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 158,
      "name": "Jagdish Prajapati",
      "year": "2014",
      "designation": "Mechanical",
      "tags": [
        "Kalol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 173,
      "name": "Vaibhavi Patel",
      "year": "2014",
      "designation": "Post graduate doctor",
      "tags": [
        "Baroda",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 175,
      "name": "Virendrasinh Parmar",
      "year": "2014",
      "designation": "Assistant Manager",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 20,
      "name": "Saga Raval",
      "year": "2015",
      "designation": "Team leader",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 32,
      "name": "Manindra Patel",
      "year": "2015",
      "designation": "Production incharge",
      "tags": [
        "Faridabad, Haryana",
        "Job",
        "Agriculture & Food Industry"
      ]
    },
    {
      "id": 57,
      "name": "Purvang Jadav",
      "year": "2015",
      "designation": "Associate in SBI",
      "tags": [
        "Nadiad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 174,
      "name": "Ritu Patel",
      "year": "2015",
      "designation": "Consulting Physiotherapist",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 176,
      "name": "Bhavin Desai",
      "year": "2015",
      "designation": "Engineer",
      "tags": [
        "Bangalore",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 177,
      "name": "Abhishikt",
      "year": "2015",
      "designation": "Technical Assistance",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 178,
      "name": "Parth",
      "year": "2015",
      "designation": "Junior Officer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 181,
      "name": "Simons Chaudhary",
      "year": "2015",
      "designation": "Resident doctor",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 185,
      "name": "Maulik Jagdishbhai Patel",
      "year": "2015",
      "designation": "ASSOCIATE",
      "tags": [
        "KALOL",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 10,
      "name": "Rushi Panchal",
      "year": "2016",
      "designation": "Graphic Designer",
      "tags": [
        "Rakhiyal, Dhegam",
        "Business",
        "Arts, Media & Entertainment"
      ]
    },
    {
      "id": 45,
      "name": "Nishantkumar Satapara",
      "year": "2016",
      "designation": "Software engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 69,
      "name": "Ashutosh Kaushikbhai Patel",
      "year": "2016",
      "designation": "Civil engineer at Ahmedabad Municipal corporation",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 78,
      "name": "Ashish Prajapati",
      "year": "2016",
      "designation": "Business development manager",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 121,
      "name": "Sondarya Shende",
      "year": "2016",
      "designation": "Government Pharmacist at AIIMS Bhopal",
      "tags": [
        "Bhopal",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 140,
      "name": "Manan Khandavi",
      "year": "2016",
      "designation": "Process Associate",
      "tags": [
        "Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 142,
      "name": "Prakashchandra Sadhu",
      "year": "2016",
      "designation": "Production chemist",
      "tags": [
        "Kalol",
        "Job",
        "Science & Environmental Studies"
      ]
    },
    {
      "id": 143,
      "name": "Hardik Prajapati",
      "year": "2016",
      "designation": "Software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 144,
      "name": "Yashesh Patel",
      "year": "2016",
      "designation": "Senior Software Engineers",
      "tags": [
        "Palanpur",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 145,
      "name": "Swapnil Rathod",
      "year": "2016",
      "designation": "Software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 146,
      "name": "Kailash Vaghela",
      "year": "2016",
      "designation": "Accounts Executive",
      "tags": [
        "Chhatral",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 148,
      "name": "Shivdattsinh Vasdiya",
      "year": "2016",
      "designation": "owner",
      "tags": [
        "Bharuch",
        "Business",
        "Transport & Logistics"
      ]
    },
    {
      "id": 149,
      "name": "Dr.Monika Thakkar [Pt]",
      "year": "2016",
      "designation": "Senior Physiotherapist working as Freelancer",
      "tags": [
        "Chhatral",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 151,
      "name": "Parvesh Pathade",
      "year": "2016",
      "designation": "Lab Attendant",
      "tags": [
        "Ahmedabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 153,
      "name": "Devanand Patil",
      "year": "2016",
      "designation": "Engineer",
      "tags": [
        "Bharuch",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 155,
      "name": "Sanjaykumar Taviyad",
      "year": "2016",
      "designation": "Assistant  Engineer",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 156,
      "name": "Shubham Mehta",
      "year": "2016",
      "designation": "Software Engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 157,
      "name": "Shubham Agrawal",
      "year": "2016",
      "designation": "Engineer",
      "tags": [
        "Bharuch",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 159,
      "name": "Akash Kukadiya",
      "year": "2016",
      "designation": "Area sales manag",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 160,
      "name": "Sourabh Mourya",
      "year": "2016",
      "designation": "Assistant manager- International Marketing",
      "tags": [
        "Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 162,
      "name": "Pooja Chavada",
      "year": "2016",
      "designation": "Deputy Manager",
      "tags": [
        "Jamnagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 165,
      "name": "Khushi Pandey",
      "year": "2016",
      "designation": "Accountant",
      "tags": [
        "Mumbai",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 170,
      "name": "Rukshar Kadri",
      "year": "2016",
      "designation": "Senior Research Associate-I",
      "tags": [
        "Gandhinagar",
        "Job",
        "Science & Environmental Studies"
      ]
    },
    {
      "id": 172,
      "name": "Urvi Ravat",
      "year": "2016",
      "designation": "Sports physiotherapist",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 188,
      "name": "Yashrajsinh Raol",
      "year": "2016",
      "designation": "Indian Airforce",
      "tags": [
        "Ambala,Haryana",
        "Job",
        "Defense & Security"
      ]
    },
    {
      "id": 14,
      "name": "Gauravkumar Singh",
      "year": "2017",
      "designation": "Bonded Govt Medical Officer Class 2",
      "tags": [
        "Dahod",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 31,
      "name": "Vaghela Samvegkumar",
      "year": "2017",
      "designation": "Owner",
      "tags": [
        "Ahmedabad",
        "Business",
        "Arts, Media & Entertainment"
      ]
    },
    {
      "id": 36,
      "name": "Narpat Mali",
      "year": "2017",
      "designation": "Owner",
      "tags": [
        "Ahmedabad",
        "Business",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 38,
      "name": "Bhavya Patel",
      "year": "2017",
      "designation": "Software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 39,
      "name": "Zala Vishvajitsinh",
      "year": "2017",
      "designation": "SEO executive",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 40,
      "name": "Param Pathak",
      "year": "2017",
      "designation": "INTERN DOCTOR",
      "tags": [
        "MANSA",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 41,
      "name": "Dr.Dhaval Parmar",
      "year": "2017",
      "designation": "Doctor",
      "tags": [
        "Vadodara",
        "Business",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 44,
      "name": "Khushbu Soni",
      "year": "2017",
      "designation": "Quality control officer",
      "tags": [
        "Ahmedabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 46,
      "name": "Riya Patel",
      "year": "2017",
      "designation": "Accountant",
      "tags": [
        "Gandhinagar",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 47,
      "name": "Chahil Patel",
      "year": "2017",
      "designation": "Head Of R&D, Co-founder",
      "tags": [
        "Ahmedabad",
        "Business",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 55,
      "name": "Yagneshgiri Goswami",
      "year": "2017",
      "designation": "Software Engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 56,
      "name": "Pooja Dudhaiya",
      "year": "2017",
      "designation": "Sr.  software engineer",
      "tags": [
        "Ahemdabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 80,
      "name": "Heena Leuva",
      "year": "2017",
      "designation": "Sr. Content Strategist and Digital Marketing Manager",
      "tags": [
        "Ahmedabad",
        "Job",
        "Arts, Media & Entertainment"
      ]
    },
    {
      "id": 107,
      "name": "Vrushik Patel",
      "year": "2017",
      "designation": "Software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 112,
      "name": "Vivek Tiwari",
      "year": "2017",
      "designation": "Software developer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 113,
      "name": "Gunjan",
      "year": "2017",
      "designation": "Gandhinagar",
      "tags": [
        "Gandhinagar",
        "Business",
        "Real Estate & Construction"
      ]
    },
    {
      "id": 114,
      "name": "Vishvadeepsinh Jadeja",
      "year": "2017",
      "designation": "Business",
      "tags": [
        "Nadiyad",
        "Business",
        "⁠Religious & Spiritual Services"
      ]
    },
    {
      "id": 115,
      "name": "Rutvik Pandya",
      "year": "2017",
      "designation": "Medical Officer(Doctor)",
      "tags": [
        "Mansa",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 116,
      "name": "Saurav Rathva",
      "year": "2017",
      "designation": "Software Developer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 117,
      "name": "Raj Chaudhary",
      "year": "2017",
      "designation": "Private job",
      "tags": [
        "Vijapur",
        "Business",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 122,
      "name": "Harshad Solanki",
      "year": "2017",
      "designation": "LARNED ADVOCATE",
      "tags": [
        "KALOL",
        "Business",
        "Law & Judiciary"
      ]
    },
    {
      "id": 128,
      "name": "Naresh",
      "year": "2017",
      "designation": "Biessnes",
      "tags": [
        "Surendernagar",
        "Job",
        "⁠Religious & Spiritual Services"
      ]
    },
    {
      "id": 130,
      "name": "Dr Ruchita Solanki",
      "year": "2017",
      "designation": "Medical officer",
      "tags": [
        "Baroda",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 154,
      "name": "Yash Padhiyar",
      "year": "2017",
      "designation": "pgt biology teacher",
      "tags": [
        "anand",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 168,
      "name": "Dev Patel",
      "year": "2017",
      "designation": "Doctor",
      "tags": [
        "Dehgam",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 187,
      "name": "Digvijaysinh Bhati",
      "year": "2017",
      "designation": "Management",
      "tags": [
        "Gandhinagar",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 34,
      "name": "Smit Soladhra",
      "year": "2018",
      "designation": "Senior software engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 48,
      "name": "Rangani Axit Gordhanbhai",
      "year": "2018",
      "designation": "Senior Scientific Assistant",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 105,
      "name": "Anjali Panchal",
      "year": "2018",
      "designation": "CA nd MBA",
      "tags": [
        "Ahemdabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 106,
      "name": "Hit Patel",
      "year": "2018",
      "designation": "HR Analyst",
      "tags": [
        "Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 110,
      "name": "Neel Jadav",
      "year": "2018",
      "designation": "Process associate",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 111,
      "name": "Dr. Devanshi Dinesh Patel",
      "year": "2018",
      "designation": "Medical officer",
      "tags": [
        "Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 125,
      "name": "Utsav Prajapati",
      "year": "2018",
      "designation": "Software engineer",
      "tags": [
        "Ahemdabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 126,
      "name": "Jeel Patel",
      "year": "2018",
      "designation": "Executive trainee",
      "tags": [
        "Kalol",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 134,
      "name": "Hitik Dholakiya",
      "year": "2018",
      "designation": "Techinal Analysis, RM & Trader",
      "tags": [
        "Surat",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 139,
      "name": "Swapnilkumar Vaghela",
      "year": "2018",
      "designation": "Intern",
      "tags": [
        "Gandhinagar",
        "Job",
        "Science & Environmental Studies"
      ]
    },
    {
      "id": 171,
      "name": "Vatsal",
      "year": "2018",
      "designation": "Planning Assistant",
      "tags": [
        "GANDHINAGAR",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 189,
      "name": "Ritesh Chaudhary",
      "year": "2018",
      "designation": "Software Engineer",
      "tags": [
        "Bangalore",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 9,
      "name": "Roshan Patel",
      "year": "2019",
      "designation": "G.s in amc garden department",
      "tags": [
        "Rakhiyal",
        "Job",
        "Agriculture & Food Industry"
      ]
    },
    {
      "id": 102,
      "name": "Darsh Patel",
      "year": "2019",
      "designation": "Programmer Analyst",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 129,
      "name": "Karan Panchal",
      "year": "2019",
      "designation": "Founder/Developer",
      "tags": [
        "Ahmedabad",
        "Job",
        "Hospitality, Tourism & Event Management"
      ]
    },
    {
      "id": 132,
      "name": "Vishalsinh Khumansinh Chavda",
      "year": "2019",
      "designation": "SUPPORT EXECUTIVE",
      "tags": [
        "GANDHINAGAR",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 138,
      "name": "Leena Pal",
      "year": "2019",
      "designation": "Branch coordinator",
      "tags": [
        "Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 167,
      "name": "Prince Yogeshbhai Patel",
      "year": "2019",
      "designation": "Software Developer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 186,
      "name": "Rutvi Patel",
      "year": "2019",
      "designation": "Bpm",
      "tags": [
        "Rakhiyal",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 22,
      "name": "Utsav Dhanani",
      "year": "2020",
      "designation": "Software developer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 23,
      "name": "Darshankumar Mahendra Bhai Padhiyar",
      "year": "2020",
      "designation": "Biomedical Engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 24,
      "name": "Vrajesh Patel",
      "year": "2020",
      "designation": "System Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 25,
      "name": "Dhwani Maheta",
      "year": "2020",
      "designation": "Junior Quality assurance in civil engineering",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 26,
      "name": "Riki Godani",
      "year": "2020",
      "designation": "Junior Data science engineer",
      "tags": [
        "AHMEDABAD",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 27,
      "name": "Jay Babariya",
      "year": "2020",
      "designation": "Jr.SDE",
      "tags": [
        "Ahemdabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 28,
      "name": "Manan Patel",
      "year": "2020",
      "designation": "Junior Data Analyst",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 30,
      "name": "Krunal Chaudhari",
      "year": "2020",
      "designation": "Engineer",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 124,
      "name": "Ravikumar Shah",
      "year": "2020",
      "designation": "AI/ML Engineer",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 152,
      "name": "Krupa Jani",
      "year": "2020",
      "designation": "Graduate engineer trainee",
      "tags": [
        "Chennai",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 11,
      "name": "Aryan Parmar",
      "year": "2021",
      "designation": "Embedded Hardware Intern",
      "tags": [
        "Pune",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 16,
      "name": "Vishva Chaudhary",
      "year": "2021",
      "designation": "Intern",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 71,
      "name": "Manish Singh",
      "year": "2021",
      "designation": "Teacher",
      "tags": [
        "Kalol",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 77,
      "name": "Bhawna Bhadauria",
      "year": "2021",
      "designation": "Salesforce Intern",
      "tags": [
        "Navsari",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 98,
      "name": "Raghubhai Maganbhai Garasiya",
      "year": "2021",
      "designation": "Raghubhai Maganbhai Garasiya",
      "tags": [
        "Gandhinagar",
        "Job",
        "Law & Judiciary"
      ]
    },
    {
      "id": 49,
      "name": "Nandini Roy",
      "year": "2022",
      "designation": "Front desk executives",
      "tags": [
        "Ahemdabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 127,
      "name": "Jasani Vivek",
      "year": "2023",
      "designation": "Programmer analyst",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 12,
      "name": "Smit",
      "year": "2024",
      "designation": "Hgan",
      "tags": [
        "Nadiad",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 164,
      "name": "Shreya",
      "year": "2024",
      "designation": "Software Developer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 165,
      "name": "Dharmesh Barot",
      "year": "2019",
      "designation": "Crime Scene Manager",
      "tags": [
        "GANDHINAGAR",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 166,
      "name": "Snehal Desai(Sachin)",
      "year": "2009",
      "designation": "ICT Officer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 167,
      "name": "Gunjan Bhingaradiya",
      "year": "2021",
      "designation": "MERN stack developer",
      "tags": [
        "Ahmedabad, Gujarat",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 168,
      "name": "DR.VINIT JANI",
      "year": "2017",
      "designation": "Medical officer (Bonded)",
      "tags": [
        "Dhansura",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 169,
      "name": "Kaushal Ballar",
      "year": "2021",
      "designation": "Company owner",
      "tags": [
        "Ankleshwar",
        "Business",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 170,
      "name": "Dhaval Patel",
      "year": "2011",
      "designation": "VP of software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 171,
      "name": "DILIPKUMAR ISHWARBHAI CHADHARY",
      "year": "2007",
      "designation": "Director- Aircraft Airworthiness & Flight Engineering",
      "tags": [
        "Dubai-UAE",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 2,
      "name": "Vaishakhi Arbastani",
      "year": "2020",
      "designation": "GET WTP Designing",
      "tags": [
        "Kalol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 3,
      "name": "Yatin kumar ashokbhai patel",
      "year": "2008",
      "designation": "Agriculturist",
      "tags": [
        "Vadodara",
        "Business",
        "Agriculture & Food Industry"
      ]
    },
    {
      "id": 4,
      "name": "Janak Makwana",
      "year": "2009",
      "designation": "Facility Manager",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 5,
      "name": "Ankit Rameshbhai Patel",
      "year": "2009",
      "designation": "Deputy collector",
      "tags": [
        "Palitana, Bhavnagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 6,
      "name": "Deep Pravinkumar Thanki",
      "year": "2009",
      "designation": "State Tax Inspector",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 7,
      "name": "Kalpesh K Padhiyar",
      "year": "2009",
      "designation": "R&D associate",
      "tags": [
        "Jaspur Padra Vadodara",
        "Job",
        "Science & Environmental Studies"
      ]
    },
    {
      "id": 8,
      "name": "Pankaj Rathi",
      "year": "2009",
      "designation": "Application Engineer",
      "tags": [
        "Montreal",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 9,
      "name": "Bhavya Patel",
      "year": "2017",
      "designation": "Software Engineer",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 12,
      "name": "Jimykant Krushnakant Vaghela",
      "year": "2020",
      "designation": "Software Engineer",
      "tags": [
        "Chhatral, Kalol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 13,
      "name": "Ankur Patel",
      "year": "2014",
      "designation": "Chartered Accountant (Asst. Manager)",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 16,
      "name": "Dr.Vaibhavi Patel",
      "year": "2014",
      "designation": "Resident physician",
      "tags": [
        "Baroda",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 17,
      "name": "Nilesh Parmar",
      "year": "2010",
      "designation": "ARTO",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 20,
      "name": "Kunal Kachariya",
      "year": "2018",
      "designation": "Management Trainee",
      "tags": [
        "Mumbai",
        "Job",
        "⁠Financial Services"
      ]
    },
    {
      "id": 23,
      "name": "Kinjal Patel",
      "year": "2009",
      "designation": "Software architect",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 25,
      "name": "Krunalkumar chaudhari",
      "year": "2020",
      "designation": "GET",
      "tags": [
        "Vadodara",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 28,
      "name": "Vishal Indrapuri",
      "year": "2010",
      "designation": "Deputy Manager",
      "tags": [
        "Kalol",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 29,
      "name": "Ranvirsinh Sisodiya",
      "year": "2015",
      "designation": "CRM TESTER",
      "tags": [
        "Ahmedabd",
        "Job",
        "⁠Engineering & Technology"
      ]
    },
    {
      "id": 30,
      "name": "Purvang jadav",
      "year": "2015",
      "designation": "Associate",
      "tags": [
        "Nadiad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 32,
      "name": "Kinjal Parmar",
      "year": "2013",
      "designation": "Staff nurse",
      "tags": [
        "Ahmedabad",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 36,
      "name": "Neel Mukeshbhai Patel",
      "year": "2018",
      "designation": "Doctor",
      "tags": [
        "Sokhada",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 37,
      "name": "RAHUL K",
      "year": "2009",
      "designation": "Deputy manager",
      "tags": [
        "Ahmedabad",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 38,
      "name": "Nisha Chaudhary",
      "year": "2012",
      "designation": "Registered Nurse and RM @ Ahemdabad civil",
      "tags": [
        "Chhala Gandhinagar",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 41,
      "name": "BhavikKumar Prajapati",
      "year": "2016",
      "designation": "Teacher",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Education & Research"
      ]
    },
    {
      "id": 42,
      "name": "Bhavin Kamleshbhai Trivedi",
      "year": "2014",
      "designation": "Talati Cum Mantri",
      "tags": [
        "Gandhinagar",
        "Job",
        "⁠Government & Public Services"
      ]
    },
    {
      "id": 43,
      "name": "Hardik S Patel",
      "year": "2009",
      "designation": "QA Head",
      "tags": [
        "Sanand",
        "Job",
        "Medical & Healthcare"
      ]
    },
    {
      "id": 45,
      "name": "Leena Pal",
      "year": "2019",
      "designation": "COC Coordinator (Branch Coordinator)",
      "tags": [
        "Ahmedabad",
        "Job",
        "Business, Management, HR & E"
      ]
    },
    {
      "id": 46,
      "name": "Harsh Mukeshbhai Pandya",
      "year": "2020",
      "designation": "I have my own business.",
      "tags": [
        "Dahegam, Gandhinagar",
        "Business",
        "Social Work & NGOs"
      ]
    },
    {
      "id": 48,
      "name": "Dhaval Jain",
      "year": "2015",
      "designation": "Production manager",
      "tags": [
        "Melbourne",
        "Job",
        "Skilled Trades & Technical Services"
      ]
    },
    {
      "id": 50,
      "name": "ADV.Harshad Solanki",
      "year": "2017",
      "designation": "Learned ADVOCATE",
      "tags": [
        "Kalol",
        "Business",
        "Law & Judiciary"
      ]
    },
    {
      "id": 51,
      "name": "Krupa Jani",
      "year": "2020",
      "designation": "Graduate engineer trainee",
      "tags": [
        "Chennai",
        "Job",
        "⁠Engineering & Technology"
      ]
    }
  ];



// DOM elements
const cardGrid = document.getElementById("card-grid");
const searchInput = document.getElementById("search-input");
const yearFilter = document.getElementById("year-filter");
const clearFiltersBtn = document.getElementById("clear-filters");

// State for active filters
let activeFilters = {
    search: "",
    year: ""
};

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    populateFilterOptions();
    renderCards(profileData);
    setupEventListeners();
    // createLogo();
    
    // Log to verify initialization
    console.log("Page initialized with filtered data:", profileData.length);
});

// Create and append a logo using canvas (if logo.png is not available)
function createLogo() {
    const logoImg = document.querySelector(".logo img");
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, "#E33D4F");
    gradient.addColorStop(1, "#8E098B");
    
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 80);
    
    // Add text
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Poppins, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("JAAG", 100, 40);
    
    // Set the canvas data URL as the logo source
    logoImg.src = canvas.toDataURL("image/png");
}

// Populate filter options from profileData
function populateFilterOptions() {
    // Get unique years
    const years = [...new Set(profileData.map(profile => profile.year))];
    years.sort((a, b) => b - a); // Sort years in descending order
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Setup event listeners for filters
function setupEventListeners() {
    // Ensure we have all necessary DOM elements
    if (!searchInput || !yearFilter || !clearFiltersBtn) {
        console.error("Missing required DOM elements for filters");
        return;
    }

    // Form submission
    const filterForm = document.getElementById('alumni-filters');
    if (filterForm) {
        filterForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission
            applyFilters();
        });
        
        // Form reset
        filterForm.addEventListener("reset", () => {
            // Reset active filters after the form has been reset
            setTimeout(() => {
                // Reset active filters
                activeFilters = {
                    search: "",
                    year: ""
                };
                
                // Clear input field
                searchInput.value = "";
                yearFilter.value = "";
                
                // Render all cards
                renderCards(profileData);
                console.log("Filters cleared, showing all profiles:", profileData.length);
            }, 0);
        });
    }

    // Search input
    searchInput.addEventListener("input", (e) => {
        activeFilters.search = e.target.value.toLowerCase();
        applyFilters();
        console.log("Search filter applied:", activeFilters.search);
    });
    
    // Year filter
    yearFilter.addEventListener("change", (e) => {
        activeFilters.year = e.target.value;
        applyFilters();
        console.log("Year filter applied:", activeFilters.year);
    });
    
    // Clear filters button
    clearFiltersBtn.addEventListener("click", () => {
        // This will trigger the form reset event above
        filterForm.reset();
    });
}

// Apply all filters to the data
function applyFilters() {
    let filteredData = profileData;
    const searchTerm = activeFilters.search.trim();
    
    // Filter by search input (name, designation, or tag)
    if (searchTerm) {
        console.log("Filtering by search term:", searchTerm);
        
        filteredData = filteredData.filter(profile => {
            // Check if search term matches name
            if (profile.name.toLowerCase().includes(searchTerm)) {
                return true;
            }
            
            // Check if search term matches designation
            if (profile.designation.toLowerCase().includes(searchTerm)) {
                return true;
            }
            
            // Check if search term matches any tag
            for (const tag of profile.tags) {
                if (tag.toLowerCase().includes(searchTerm)) {
                    return true;
                }
            }
            
            return false;
        });
    }
    
    // Filter by year
    if (activeFilters.year) {
        console.log("Filtering by year:", activeFilters.year);
        filteredData = filteredData.filter(profile =>
            profile.year === activeFilters.year
        );
    }
    
    console.log(`Found ${filteredData.length} profiles matching filters`);
    
    // Render filtered cards
    renderCards(filteredData);
}

// Render profile cards
function renderCards(data) {
    // Clear existing cards
    cardGrid.innerHTML = "";
    
    // If no results, show message
    if (data.length === 0) {
        const noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.textContent = "No profiles match your filters. Try adjusting your criteria.";
        cardGrid.appendChild(noResults);
        return;
    }
    
    // Create and append cards
    data.forEach(profile => {
        const card = document.createElement("div");
        card.className = "card";
        
        // Create card HTML
        card.innerHTML = `
            ${profile.image && profile.image.length > 0 ? `<img src="${profile.image}" alt="${profile.name}" class="card-img">` : ""}    
            <div class="card-content">
                <h3 class="card-name">${profile.name}</h3>
                <p class="card-designation">${profile.designation}</p>
                <p class="card-year">Class of ${profile.year}</p>
                <div class="card-tags">
                    ${profile.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `;
        
        // Append card to grid
        cardGrid.appendChild(card);
    });
}