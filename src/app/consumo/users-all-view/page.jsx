import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UsersView() {

    let items;

    try{
        const response = await fetch('http://localhost:3000/dados/users-all');
        items = await response.json();
        
    }catch(error){
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
          <h1 className="font-bold text-3xl">Usuários</h1>

          
          <div className="card-eletro-view">
          <table className="min-w-full border-collapse border-2 border-gray-300">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/consumo/users-by-id-view/${item.id}`} className="text-amber-400 font-bold hover:underline">
                  {item.name}
                </Link>
              </td>
              <td>{item.email}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      );
}
