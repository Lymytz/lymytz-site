import VerticalMenu from "../components/menu-fonctionnalite/VerticalMenu.tsx";

const NotreErp = () => {
    return (
        <>
            <div className={'flex justify-center bg-secondary px-2 py-5 lg:p-10'}>
                <h2 className={'text-4xl text-white font-bold'}>
                    Une visite guidée de la solution Lymytz System?</h2>
            </div>
            <div>
                {/*System de menu verticale*/}
                <div>
                    <VerticalMenu />
                </div>
                {/*diaporama des fonctionnalités*/}
                <div></div>
            </div>

        </>
    )
}
export default NotreErp