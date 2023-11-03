import Image from 'next/image'
import swedBankLogo from '@/../public/img/Swedbank_pos_720px.png'

const Swedbank = () => (
    <div className="relative aspect-swedbank h-5 self-center sm:h-8 md:h-6">
        <Image
            src={swedBankLogo}
            alt="Logo of Swedbank"
            fill
            sizes="(max-width:390px) 40vw, (max-width:768px) 30vw, (max-width:1024px) 20vw, 10vw"
        />
    </div>
)

export default Swedbank
