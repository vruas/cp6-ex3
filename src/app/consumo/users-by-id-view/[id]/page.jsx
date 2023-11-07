
import { ImHome} from 'react-icons/im';
import { IoArrowBackOutline } from 'react-icons/io5';

import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function UsersView({ params }) {

    let item;
    const id = params.id;

    try {
        const response = await fetch(`http://localhost:3000/dados/users-by-id/${id}`);
        item = await response.json();

    } catch (error) {
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">Usuários</h1>

            <div className="card-eletro-view">
                <ul>
                    <li key={item.id}>
                        <p className='text-amber-400 font-bold'>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.country}</p>
                        <div className="icons">
                            <Link href="/"><ImHome /></Link>
                            <Link href="/consumo/users-all-view"><IoArrowBackOutline /></Link>
                            

                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}



