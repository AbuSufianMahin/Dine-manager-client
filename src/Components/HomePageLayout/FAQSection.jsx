import Lottie from "lottie-react";
import thinkingAnimation from "../../assets/LottieAnimations/two-people-thinking.json"

const faqs = [
    {
        question: "How do I see what food is available?",
        answer: "Simply open the menu section to see all available food items along with their details."
    },
    {
        question: "How do I add food to my order?",
        answer: "Click on the food item you want and select the 'Add to Order' button. It will be saved to your current order list."
    },
    {
        question: "Can I review my order before placing it?",
        answer: "Yes. You can open your order list at any time to see the items you have added before finalizing your order."
    },
    {
        question: "How do I place my order?",
        answer: "Once you’re happy with your selections, go to your order list and click the 'Place Order' button."
    },
    {
        question: "Can I see my past orders?",
        answer: "Yes. You can check your order history to see all the items you’ve ordered previously."
    }
];


const FAQSection = () => {
    return (
        <section className='py-5 md:py-10 lg:py-20'>
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
                <div className="mt-5 flex items-center gap-5">
                    <div className="space-y-2 flex-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                tabIndex={0}
                                className="collapse collapse-arrow border-2 border-base-300 bg-base-200"
                            >
                                <div className="collapse-title font-semibold">
                                    {faq.question}
                                </div>
                                <div className="collapse-content text-sm">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex flex-4">
                        <Lottie animationData={thinkingAnimation} className="h-[400px]"></Lottie>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;