import DashboardLayout from '@/components/layout/DashboardLayout'

export default function index() {
  return (
  <main className='w-full bg-emerald-500'>

  </main>
  )
}

index.getLayout = function getLayout(page: React.ReactElement){
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}


