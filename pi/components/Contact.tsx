import Image from "next/image";
import { calendarIcon, locationIcon, mailGreenIcon, mailIcon, phoneIcon, smartphoneIcon, userIcon } from "../public/assets";
import { useRef, useState } from "react";

const Contact = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
  
    const handleFirstNameChange = (e: any) => {
      setFirstNameValue(e.target.value)
    };
  
    const handleLastNameChange = (e: any) => {
      setLastNameValue(e.target.value)
    };
  
    const handlePhoneNumberChange = (e: any) => {
      setPhoneNumberValue(e.target.value)
    };
  
    const handleEmailChange = (e: any) => {
      setEmailValue(e.target.value)
    };
    
    const handleMessageChange = (e: any) => {
      setMessageValue(e.target.value)
    };
  
  
    const [popUpVisible, setPopUpVisible] = useState(false);
    const showPopUp = (e: any) => {
  
        if (emailValid) {
          setPopUpVisible(prevState => !prevState)
          setTimeout(() => {
              setPopUpVisible(prevState => !prevState)
          }, 2000)
    
          setTimeout(() => {
            setFirstNameValue('');
            setLastNameValue('');
            setPhoneNumberValue('');
            setEmailValue('');
            setMessageValue('');
            setEmailWarning('');
          }, 200)
        }

        return emailValid;
    }

    const emailInputRef = useRef(null);

    const [emailWarning, setEmailWarning] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = (e: React.FormEvent<HTMLInputElement>) => {
      const email = e?.currentTarget.value
      if (email && validateEmail(email)) {
        setEmailValid(true);
        setEmailWarning(`${email} is valid`)
      } else if (email) {
        setEmailValid(false);
        setEmailWarning(`${email} is not valid`)
      } else {
        setEmailWarning('')
      }

      return false
    };
    
    return (
        <div className="">
            <div>
                <iframe 
                    title="Location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5539628273386!2d106.72462514179556!3d10.845406028951192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527d0a30962a5%3A0x5d4d4e5ffc439c3e!2zxJAuIEhp4buHcCBCw6xuaCwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1726020169667!5m2!1svi!2s" 
                    height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="w-full border border-neutral-500">
                </iframe>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-container mx-auto my-10">
                <div className="flex-1 mx-auto">
                    <span className="tracking-tight text-gray-700 text-2xl">Liên Hệ</span>
                    <h3 className="font-bold text-[3rem] leading-tight w-[25rem] mb-4">Bạn có thắc mắc hoặc cần hỗ trợ?</h3>

                    <div className="">
                        <div className="flex items-center text-gray-700">
                            <div className="p-4 pl-0">
                                <Image src={locationIcon} alt="" className="w-8"/>
                            </div>

                            <span className="max-w-[25rem]">RPWC+QV4, Đ. Hiệp Bình, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh, Việt Nam</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <div className="p-4 pl-0">
                                <Image src={smartphoneIcon} alt="" className="w-8"/>
                            </div>

                            <span className="max-w-[25rem] font-bold text-xl">1 800 555 45 65</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <div className="p-4 pl-0">
                                <Image src={mailGreenIcon} alt="" className="w-8"/>
                            </div>

                            <span className="max-w-[25rem]">info@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* iframe to prevent reloading */}
                <iframe name="frame" className="hidden"></iframe>

                {/* send message to email using formsubmit.co */}
                <form className="mx-auto flex flex-col gap-6 flex-1 mt-8" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" 
                method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                    <h2 className="text-zinc-800 font-semibold text-2xl md:text-[2rem] md:leading-10">
                        Đặt lịch sân bóng
                    </h2>

                    <div className="flex gap-4 border-b border-gray-300 w-fit">
                        <Image src={userIcon} alt="" />
                        <input type="text" name="First Name" placeholder={'Tên'} required value={firstNameValue} onChange={(e) => handleFirstNameChange(e)}
                        className="py-2 outline-0 placeholder:text-neutral-900 w-[20rem]"/>
                    </div>

                    <div className="flex gap-4 border-b border-gray-300 w-fit">
                        <Image src={phoneIcon} alt="" />
                        <input type="number" name="Phone Number" minLength={5} placeholder={'Số điện thoại'} required value={phoneNumberValue} 
                        onChange={(e) => handlePhoneNumberChange(e)}
                        onKeyDown={ e => ( e.key === 'e' || e.key === '.' ) && e.preventDefault() }
                        className="py-2 placeholder:text-neutral-900 outline-0 w-[20rem]"/>
                    </div>

                    <div className="">
                      <div className="flex gap-4 border-b border-gray-300 w-fit">
                          <Image src={mailIcon} alt="" className="w-6"/>
                          <input type="email" name="Email" placeholder={'Email'} required value={emailValue} 
                          onChange={(e) => handleEmailChange(e)} onInput={e => validate(e)} ref={emailInputRef}
                          className="py-2 placeholder:text-neutral-900 outline-0 w-[20rem]" />
                      </div>
                      <p className={`${emailValid ? 'text-green-600' : 'text-red-500'} font-normal text-[8px] md:text-xs`}>{emailWarning}</p>
                    </div>

                    <div className="flex gap-4 border-b border-gray-300 w-fit">
                        <Image src={calendarIcon} alt="" className="w-6"/>
                        <input type="date" name="date" required
                        className="py-2 placeholder:text-neutral-900 outline-0" />
                    </div>

                    <input type="submit" value={'Gửi'}
                    className="hover:bg-emerald-500 w-fit cursor-pointer text-white bg-emerald-400 
                    text-xl px-12 py-2.5"/>

                    {/* prevent capcha */}
                    <input type="hidden" name="_captcha" value="false"/>
                    {/* add multiple email address that the form can send to */}
                    {/* <input type="hidden" name="_cc" value={contactEmails}/> */}
                </form>
            </div>

            {/* pop up appears when successfully submit form */}
            <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 z-30
                bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                <h4 className="text-neutral-800 font-semibold text-base leading-none z-30">
                  Cảm ơn bạn đã đặt lịch! Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.
                </h4>
            </div>
        </div>
    )
};

export default Contact;