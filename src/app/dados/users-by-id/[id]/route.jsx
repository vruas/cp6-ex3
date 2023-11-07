import { NextResponse } from "next/server";


const users = [

    {
        id: 1,
		name: "Coby Shields",
		email: "eu.dolor@hotmail.ca",
		country: "Ireland"
	},
	{
        id: 2,
		name: "Zephania Lambert",
		email: "vestibulum.ante@hotmail.edu",
		country: "Ireland"
	},
	{
        id: 3,
		name: "Carolyn Hurst",
		email: "sociis.natoque@google.couk",
		country: "South Africa"
	},
	{
        id: 4,
		name: "Jasmine Charles",
		email: "luctus@google.ca",
		country: "Canada"
	},
	{
        id: 5,
		name: "Isaiah Skinner",
		email: "consequat@hotmail.ca",
		country: "United States"
	},
    {
        id: 6,
		name: "Conan Griffin",
		email: "malesuada.id.erat@icloud.org",
		country: "Pakistan"
	},
	{
        id: 7,
		name: "Hasad Bradley",
		email: "nisl.quisque@outlook.ca",
		country: "Turkey"
	},
	{
        id: 8,
		name: "Ethan Garrett",
		email: "elit.etiam.laoreet@aol.edu",
		country: "Philippines"
	},
	{
        id: 9,
		name: "Nissim Bean",
		email: "nec.tempus@google.edu",
		country: "Spain"
	},
	{
        id: 10,
		name: "Josephine Witt",
		email: "vel.arcu.curabitur@protonmail.com",
		country: "Singapore"
	},
    {
        id: 11,
		name: "Dalton Mckenzie",
		email: "pharetra.nibh@aol.com",
		country: "Pakistan"
	},
	{
        id: 12,
		name: "Armando Hull",
		email: "odio.auctor@outlook.couk",
		country: "Indonesia"
	},
	{
        id: 13,
		name: "Winter Flores",
		email: "nullam.feugiat@aol.ca",
		country: "China"
	},
	{
        id: 14,
		name: "Castor Hall",
		email: "ipsum@protonmail.edu",
		country: "Vietnam"
	},
	{
        id: 15,
		name: "Fuller Campos",
		email: "diam.pellentesque@protonmail.ca",
		country: "Philippines"
	}


]

export async function GET(request,{params}) {

    const id = params.id;
  
    if(id > 0 && id <= users.length){
      return NextResponse.json(users.find((user)=> user.id == id));
    }else{
     
      return id == 0 ? NextResponse.json(users) : NextResponse.redirect("http://localhost:3000/error")
    }
    
    
  }