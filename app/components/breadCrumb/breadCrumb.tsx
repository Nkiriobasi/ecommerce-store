import Link from "next/link"

interface BreadCrumbPropsType {
    title: string
}

const BreadCrumb: React.FC<BreadCrumbPropsType> = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 flex justify-content-center align-items-center">
                    <p className="mb-0 text-center">
                        <Link href='/' className="text-dark">
                            Home &nbsp;
                        </Link>
                        / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb