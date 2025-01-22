import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const Faq = () => {
    const { t } = useTranslation()
    const faqData = [
        {
            title:t('faq_t_1'),
            description:t('faq_d_1')
        },
        {
            title:t('faq_t_2'),
            description:t('faq_d_2')
        },
        {
            title:t('faq_t_3'),
            description:t('faq_d_3')
        },
        {
            title:t('faq_t_4'),
            description:t('faq_d_4')
        },
        {
            title:t('faq_t_5'),
            description:t('faq_d_5')
        },
        {
            title:t('faq_t_6'),
            description:t('faq_d_6')
        },
        {
            title:t('faq_t_7'),
            description:t('faq_d_7')
        },
        {
            title:t('faq_t_8'),
            description:t('faq_d_8')
        }
    ]
    return (
        <section className="max-w-7xl mx-auto bg-[#F3F9FB] relative container px-4 mt-10 md:mt-14 xl:mt-20 rounded-[40px]">
            <div className="recommunded-inner p-3 rounded-[40px] w-full xl:w-[80%] mx-auto">
                <h2 className="text-[#C9A690] font-bold text-[16px] md:text-[18px] text-center">{t('faq_t')}</h2>
                <h4 className="text-[24px] font-semibold md:text-[32px] xl:text-[40px] text-center mt-5 md:mt-8 px-4">{t('faq_d')}</h4>
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((el,i) => (
                        <AccordionItem key={i+1} value={`item-${i + 1}`} className={`${i==7?'border-none':'border-b'}`}>
                            <AccordionTrigger className="text-[18px] md:text-[20px] font-semibold hover:underline-offset-0">{el.title}</AccordionTrigger>
                            <AccordionContent className="text-[#667085] text-[14px] md:text-[16px]">
                                {el.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;