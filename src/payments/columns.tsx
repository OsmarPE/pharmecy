import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Barcode, Box, DollarSign, Image, Mail, MapPin, MoreHorizontal, Pencil, Tag, Trash, UserRound } from "lucide-react"
import { Link } from "react-router-dom"

type PaymentCategory = {
  id: string
  name: string
}

type PaymentRole = {
  id: string
  name: string
}

type PaymentTag = {
  id: string
  name: string
}
type PaymentUser = {
  id: string,
  name: string,
  email: string,
  role: string,
  password: string,
}
type PaymentProduct ={
    id: number;
    name: string;
    priceBase: number;
    priceDiscount: number | null;
    sku: string;
    category?: {
      id: number;
      name: string;
    };
    image: string;
    tags: {
      id: number;
      name: string;
    }[];
  }
  

export type PaymentLocation = {
  id: number;
  street: string;
  number: string;
  betweenStreet: string;
  andBetweenStreet: string;
  zipCode: string;
  city: string;
  state: string;
  colony: string;
  latitude: number;
  longitude: number;
  branch: string;
};
export const rolesColumns: ColumnDef<PaymentRole>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <Badge variant={'outline'}>
          <UserRound width={10} />
          {payment.name}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/admin/roles?editid=${payment.id}`}>
                <Pencil width={16} height={16} /> Editar
            
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={`/admin/roles?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export const rolesData: PaymentRole[] = [
  {
    id: "1",
    name: "Administrador",
  },
  {
    id: "2",
    name: "Usuario",
  },
]

export const tagsColumns: ColumnDef<PaymentTag>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex items-center gap-2">
          <Tag width={14} />
          {payment.name}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/admin/tags?editid=${payment.id}`}>
                <Pencil width={16} height={16} /> Editar
            
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={`/admin/tags?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  } 

]

export const tagsData: PaymentTag[] = [
  {
    id: "1",
    name: "Bebes",
  },
  {
    id: "2",
    name: "Medicamentos",
  },
  {
    id: "3",
    name: "Dermatología",
  },
  {
    id: "4",
    name: "Terapia",
  },
  {	
    id: "5",
    name: "Otros",
  },
  {
    id: "6",
    name: "Otros",
  },
  {
    id: "7",
    name: "Otros",
  },
  {
    id: "8",
    name: "Otros",
  },
]


export const categoriesColumns: ColumnDef<PaymentCategory>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <Badge variant={'outline'}>
          {payment.name}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/admin/categories?editid=${payment.id}`}>
                <Pencil width={16} height={16} /> Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={`/admin/categories?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
] 


export const categoriesData: PaymentCategory[] = [
  {
    id: "1",
    name: "Bebes",
  },
  {
    id: "2",
    name: "Medicamentos",
  },
  {
    id: "3",
    name: "Dermatología",
  },
  {
    id: "4",
    name: "Terapia",
  }
]

export const usersColumns: ColumnDef<PaymentUser>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex items-center gap-3">
          {/* <UserRound width={14} /> */}
          <div className="flex items-center justify-center size-8 text-sm text-gray-500 font-medium rounded-full bg-gray-100">
            {payment.name.charAt(0).toUpperCase()}
          </div>
          {payment.name}
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex items-center gap-2">
          <Mail width={14} />
          {payment.email}
        </div>
      )
    },
  },
  {
    accessorKey: "role",
    header: "Rol",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <Badge className="capitalize" variant={'outline'}>
          {payment.role}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/admin/users?editid=${payment.id}`}>
                <Pencil width={16} height={16} /> Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={`/admin/users?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
export const usersData: PaymentUser[] = [
  {
    id: "1",
    name: "Osmar",
    email: "osmar@gmail.com",
    role: "administrador",
    password: "123456",
  },
  {
    id: "2",
    name: "Oscar",
    email: "oscar@gmail.com",
    role: "usuario",
    password: "123456",
  },
  {
    id: "3",
    name: "Pedro",
    email: "pedro@gmail.com",
    role: "administrador",
    password: "123456",
  },
  {
    id: "4",
    name: "Juan",
    email: "juan@gmail.com",
    role: "administrador",
    password: "123456",
  },
  {
    id: "5",
    name: "Maria",
    email: "maria@gmail.com",
    role: "administrador",
    password: "123456",
  }
]

export const locationsData: PaymentLocation[] = [
  {
    id: 1,
    street: "102",
    number: "41",
    betweenStreet: "1",
    andBetweenStreet: "2",
    zipCode: "28013",
    city: "Madrid",
    state: "Comunidad de Madrid",
    colony: "Centro",
    latitude: 40.420139,
    longitude: -3.702260,
    branch: "Oficina Central Madrid",
  },
  {
    id: 2,
    street: "192",
    number: "92",
    betweenStreet: "3",
    andBetweenStreet: "4",
    zipCode: "08008",
    city: "Barcelona",
    state: "Cataluña",
    colony: "Eixample",
    latitude: 41.394489,
    longitude: 2.164011,
    branch: "Sucursal Principal Barcelona",
  },
  {
    id: 3,
    street: "92",
    number: "15",
    betweenStreet: "5",
    andBetweenStreet: "6",
    zipCode: "41004",
    city: "Sevilla",
    state: "Andalucía",
    colony: "Casco Antiguo",
    latitude: 37.386421,
    longitude: -5.994072,
    branch: "Oficina Sevilla Centro",
  },
  {
    id: 4,
    street: "92A",
    number: "8",
    betweenStreet: "7",
    andBetweenStreet: "8",
    zipCode: "08002",
    city: "Barcelona",
    state: "Cataluña",
    colony: "El Gòtic",
    latitude: 41.387063,
    longitude: 2.169994,
    branch: "Sucursal Plaza Catalunya",
  },
  {
    id: 5,
    street: "102B",
    number: "64",
    betweenStreet: "9",
    andBetweenStreet: "10",
    zipCode: "28001",
    city: "Madrid",
    state: "Comunidad de Madrid", 
    colony: "Salamanca",
    latitude: 40.425892,
    longitude: -3.685903,
    branch: "Oficina Barrio Salamanca",
  }
];
export const locationsColumns: ColumnDef<PaymentLocation>[] = [
  {
    accessorKey: "branch",
    header: "Sucursal",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex gap-2 items-center">
          <MapPin width={14} />
          {payment.branch}
        </div>
      )
    },
  },
  {
    accessorKey: "street",
    header: "Calle",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <p> Calle {payment.street} </p>
      )
    },
  },
  {
    accessorKey: "number",
    header: "Número",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <p> #{payment.number} </p>
      )
    },
  },
  {
    accessorKey: "betweenStreet",
    header: "Entre",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <p> Entre {payment.betweenStreet} y {payment.andBetweenStreet}</p>
     
      )
    },
  },
  {
    accessorKey: "city",
    header: "Ciudad",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    accessorKey: "colony",
    header: "Colonia",
  },
  {
    accessorKey: "zipCode",
    header: "Código Postal",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/admin/locations?editid=${payment.id}`}>
                <Pencil width={16} height={16} /> Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>              
              <Link to={`/admin/locations?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export const productsColumns: ColumnDef<PaymentProduct>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <Badge variant={'secondary'} className="text-gray-500 flex items-center gap-1"> <Box width={14}/> 100</Badge>
      )
    },
  },
  {
    accessorKey: "priceBase",
    header: "Precio",
    cell: ({ row }) => {
      const payment = row.original
      return (
          <span className="font-medium">${payment.priceBase}</span>
      )
    },
  },
  {
    accessorKey: "priceDiscount",
    header: "Descuento",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <span className="text-gray-500">${payment.priceDiscount}</span>
      )
    },
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex items-center gap-2">
          <Barcode width={14} />
          {payment.sku}
        </div>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Categoría",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <Badge variant={'outline'}>
          {payment.category?.name ?? "Sin Categoría"}
        </Badge>
      )
    },
  },
   {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex items-center gap-2">
          <Image width={14} />
        
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pencil width={16} height={16} /> Editar
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={`/admin/products?removeid=${payment.id}`}>
                <Trash width={16} height={16} /> Eliminar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }

]

export const productsData: PaymentProduct[] = [
  {
    id: 1,
    name: "Bebeza",
    priceBase: 100,
    priceDiscount: 10,
    sku: "123456",
    category: {
      id: 1,
      name: "Bebes",
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: [
      {
        id: 1,
        name: "Bebes",
      },
      {
        id: 2,
        name: "Medicamentos",
      },
      {
        id: 3,
        name: "Dermatología",
      },
      {
        id: 4,
        name: "Terapia",
      },
    ],
  },
  {
    id: 2,
    name: "Medicamentos",
    priceBase: 220,
    priceDiscount: 20,
    sku: "123456",
    category: {
      id: 2,
      name: "Medicamentos",
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: [
      {
        id: 1,
        name: "Bebes",
      },
      {
        id: 2,
        name: "Medicamentos",
      },
      {
        id: 3,
        name: "Dermatología",
      },
      {
        id: 4,
        name: "Terapia",
      },
    ],
  },
  {
    id: 3,
    name: "Dermatología",
    priceBase: 3000,
    priceDiscount: 20,
    sku: "123456",
    category: {
      id: 3,
      name: "Dermatología",
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: [
      {
        id: 1,
        name: "Bebes",
      },
      {
        id: 2,
        name: "Medicamentos",
      },
      {
        id: 3,
        name: "Dermatología",
      },
      {
        id: 4,
        name: "Terapia",
      },
    ],
  },
  {
    id: 4,
    name: "Terapia",
    priceBase: 4000,
    priceDiscount: 200,
    sku: "123456",
    category: {
      id: 4,
      name: "Terapia",
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: [
      {
        id: 1,
        name: "Bebes",
      },
      {
        id: 2,
        name: "Medicamentos",
      },
      {
        id: 3,
        name: "Dermatología",
      },
      {
        id: 4,
        name: "Terapia",
      },
    ],
  },
]