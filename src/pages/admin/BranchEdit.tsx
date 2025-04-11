import { useParams } from "react-router-dom"

export default function BranchEdit() {

    const id = useParams<{id: string}>().id

    console.log(id)

    return (
    <div>BranchEdit</div>
  )
}
