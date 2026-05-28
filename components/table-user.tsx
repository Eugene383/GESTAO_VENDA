
import { Table,TableBody,TableHeader,TableHead,TableRow,TableCaption,TableCell } from "@/components/ui/table";
import UpdateUserForm  from "@/components/update-user-form"
import DeleteUserForm from "./delete-user-form";



export default function TableUser({users}:any){
    
    return(
        <Table>
            <TableCaption className="text-xl">Lista de usuarios </TableCaption>
            <TableHeader>
                <TableRow className="bg-blue-700">
                    <TableHead>Codigo</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Acoes</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user:any)=>(
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="space-x-2">
                             <UpdateUserForm user={user} />
                             <DeleteUserForm user={user} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
       </Table>
    )
}