import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { IcMenu, IcMenuActive, ImgLogo, IcPesanan, IcProducts, IcDown, IcUp, IcGlobe, IcSetting, IcPemasaran, IcModul, IcTanggapan, IcLogout } from '../../../assets'
import { Gap } from '../../atoms'
import './sidebar.scss'

const Sidebar = () => {
    const [showSubmenuProduct, setShowSubmenuProduct] = useState(false)
    const [showSubmenuToko, setShowSubmenuToko] = useState(false)
    const [showSubmenuSetting, setShowSubmenuSetting] = useState(false)
    const [showSubmenuPemasaran, setShowSubmenuPemasaran] = useState(false)
    const [showSubmenuModul, setShowSubmenuModul] = useState(false)

    const [isShowDashboard, setShowDashboard] = useState(false)

    const stateGlobal = useSelector(state => state)
    
    useEffect(() => {
        let dataHome = stateGlobal.Home.home
        let cek = dataHome.filter((item) => item.id === 'dashboard')
        if (cek.length > 0) {
            if (cek[0].isShowed) setShowDashboard(true)
        }
    }, [])
    
    return (
        <div className="sidebar-wrapper">
            <div className="image-wrapper">
                <img src={ImgLogo} className="logo-image" alt="imageLogo" />
            </div>
            <Gap height={20} />
            <div className="wrapper-button-status">
                <p className="text-button-status">Admin</p>
            </div>
            <Gap height={20} />
            <div className="wrapper-content-sidebar">
                { isShowDashboard &&
                    <div className="wrapper-item-menu active-menu">
                        <img src={IcMenuActive} className="icon-menu-image" alt="imageIcon" />
                        <Gap width={10} />
                        <p className="text-item-menu active-text-menu">Dashboard</p>
                    </div>
                }
                <div className="wrapper-item-menu">
                    <img src={IcPesanan} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Pesananku</p>
                </div>
                <div className="wrapper-item-menu" onClick={() => setShowSubmenuProduct(!showSubmenuProduct)}>
                    <img src={IcProducts} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Produkku</p>
                    { showSubmenuProduct && <img src={IcUp} className="icon-button-arrow" alt="imageIcon" /> }
                    { !showSubmenuProduct && <img src={IcDown} className="icon-button-arrow" alt="imageIcon" /> }
                </div>
                { showSubmenuProduct &&
                    <div className='wrapper-item-submenu'>
                        <p className="text-item-menu">Semua Product</p>
                        <p className="text-item-menu">Kategori</p>
                        <p className="text-item-menu">Variasi</p>
                        <p className="text-item-menu">Koleksi</p>
                    </div>
                }
                <div className="wrapper-item-menu" onClick={() => setShowSubmenuToko(!showSubmenuToko)}>
                    <img src={IcGlobe} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Toko Online</p>
                    { showSubmenuToko && <img src={IcUp} className="icon-button-arrow" alt="imageIcon" /> }
                    { !showSubmenuToko && <img src={IcDown} className="icon-button-arrow" alt="imageIcon" /> }
                </div>
                { showSubmenuToko &&
                    <div className='wrapper-item-submenu'>
                        <p className="text-item-menu">Pengaturan</p>
                        <p className="text-item-menu">Google Analytics</p>
                        <p className="text-item-menu">Tema</p>
                        <p className="text-item-menu">Halaman</p>
                        <p className="text-item-menu">SEO</p>
                        <p className="text-item-menu">Tambahan Checkout</p>
                        <p className="text-item-menu">Buletin Toko</p>
                    </div>
                }
                <div className="wrapper-item-menu" onClick={() => setShowSubmenuSetting(!showSubmenuSetting)}>
                    <img src={IcSetting} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Pengaturan</p>
                    { showSubmenuSetting && <img src={IcUp} className="icon-button-arrow" alt="imageIcon" /> }
                    { !showSubmenuSetting && <img src={IcDown} className="icon-button-arrow" alt="imageIcon" /> }
                </div>
                { showSubmenuSetting &&
                    <div className='wrapper-item-submenu'>
                        <p className="text-item-menu">Pengelola Toko</p>
                        <p className="text-item-menu">Informasi Toko</p>
                        <p className="text-item-menu">Pengiriman</p>
                        <p className="text-item-menu">Pembayaran</p>
                        <p className="text-item-menu">Informasi Pajak</p>
                        <p className="text-item-menu">Developer</p>
                    </div>
                }
                <div className="wrapper-item-menu" onClick={() => setShowSubmenuPemasaran(!showSubmenuPemasaran)}>
                    <img src={IcPemasaran} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Pemasaran</p>
                    { showSubmenuPemasaran && <img src={IcUp} className="icon-button-arrow" alt="imageIcon" /> }
                    { !showSubmenuPemasaran && <img src={IcDown} className="icon-button-arrow" alt="imageIcon" /> }
                </div>
                { showSubmenuPemasaran &&
                    <div className='wrapper-item-submenu'>
                        <p className="text-item-menu">Informasi Pelanggan</p>
                        <p className="text-item-menu">Kode Kupon</p>
                        <p className="text-item-menu">Facebook Marketing</p>
                    </div>
                }
                <div className="wrapper-item-menu" onClick={() => setShowSubmenuModul(!showSubmenuModul)}>
                    <img src={IcModul} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Modul</p>
                    { showSubmenuModul && <img src={IcUp} className="icon-button-arrow" alt="imageIcon" /> }
                    { !showSubmenuModul && <img src={IcDown} className="icon-button-arrow" alt="imageIcon" /> }
                </div>
                { showSubmenuModul &&
                    <div className='wrapper-item-submenu'>
                        <p className="text-item-menu">All Modules</p>
                        <p className="text-item-menu">Messenger</p>
                        <p className="text-item-menu">Facebook</p>
                        <p className="text-item-menu">Whatsapp</p>
                        <p className="text-item-menu">Instagram</p>
                        <p className="text-item-menu">Twitter</p>
                        <p className="text-item-menu">Blogspot</p>
                    </div>
                }
                <Gap height={40}/>
                <div className="wrapper-item-menu">
                    <img src={IcTanggapan} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Tanggapan</p>
                </div>
                <Gap height={40}/>
                <div className="wrapper-item-menu">
                    <img src={IcLogout} className="icon-menu-image" alt="imageIcon" />
                    <Gap width={10} />
                    <p className="text-item-menu">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
