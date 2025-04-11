import BannerPagination from "@/components/admin/banner/BannerActions";
import BannerAside from "@/components/admin/banner/BannerAside";
import BannerAsideImage from "@/components/admin/banner/BannerAsideImage";
import BannerGallery from "@/components/admin/banner/BannerGallery";
import BannerHeader from "@/components/admin/banner/BannerHeader";
import BannerImage from "@/components/admin/banner/BannerImage";
import BannerPlaceholder from "@/components/admin/banner/BannerPlaceholder";
import { Button } from "@/components/ui/button";
import { imagesBanner } from "@/lib/helper";
import { DragEvent, useMemo, useState } from "react";

export default function Banner() {

    const [data, setdata] = useState(() => imagesBanner)
    const [dataBackup, setdataBackup] = useState(() => imagesBanner)
    const [indexImg, setIndexImg] = useState<number | null>(null)
    const [modeEdit, setModeEdit] = useState(false)
    const [indexCurrent, setIndexCurrent] = useState<null | number>(null);
    const [indexR, setindexR] = useState<null | number>(null);

    const onDragStart = (_e: DragEvent<HTMLElement>, index: number) => {
        if (!modeEdit) return
        setIndexCurrent(index)
    };
    const onDragEnter = (e: DragEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'move';
        if (!modeEdit) return
        setindexR(index)

    };
    const onDragLeave = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
    };
    const onDragOver = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
    };
    const onDrop = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        if (!modeEdit) return
        e.currentTarget.classList.remove('border')
        if (indexCurrent === indexR) {
            setIndexCurrent(null)
            return
        }

        const array = [...data]
        const item = array[indexCurrent as number]
        console.log(indexCurrent)
        array.splice(indexCurrent as number, 1)

        array.splice(indexR as number, 0, item)
        setdata([...array])
        setIndexCurrent(null)
        setindexR(null)
        setIndexImg(indexR)

    };

    const onSubmit = () => {
        const arraySorted = data.map((item, i) => ({ ...item, order: i + 1 }))
        setdataBackup([...data])
        setModeEdit(false)
    }

    const handleCancel = () => {
        setdata([...dataBackup])
        setModeEdit(false)
    }

    const isDifferentData = useMemo(() => dataBackup.some((item, i) => item.src !== data[i].src), [dataBackup, data])


    return (
        <div className='max-w-6xl'>
            <BannerHeader modeEdit={modeEdit} setModeEdit={setModeEdit} />
            <div className="grid grid-cols-[1fr_auto_250px] gap-6 items-start">
                <div>
                    <BannerGallery>
                        {indexImg === null ? <BannerPlaceholder /> : <BannerImage src={data[indexImg].src} />}
                    </BannerGallery>
                    {indexImg !== null && <BannerPagination index={indexImg} setIndex={setIndexImg} length={data.length} />}
                </div>
                <div className="w-[1px] h-full bg-gray-200"></div>
                <BannerAside>
                    <div className={`space-y-4 ${modeEdit ? ' border border-gray-300 p-2 rounded-xl' : ''}`}>
                        {
                            data.map((image, index) => (
                                <BannerAsideImage
                                    index={index}
                                    src={image.src}
                                    modeEdit={modeEdit}
                                    setIndexImg={setIndexImg}
                                    indexImg={indexImg}
                                    onDragStart={onDragStart}
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                />
                            ))
                        }
                    </div>
                    <div className="grid gap-3">
                        {
                            isDifferentData && <Button onClick={onSubmit} variant={'dashboard'}>Guardar Cambios</Button>
                            
                        }
                        
                        {modeEdit && <Button onClick={handleCancel} variant={'outline'}>Cancelar</Button>}
                    </div>
                </BannerAside>
            </div>
        </div>
    )
}
