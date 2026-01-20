import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function PrivacyPolicyPage() {
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Privacy Policy">
            {/* Main Content */}
            <section className="py-16 bg-white">
                <div
                    className="container mx-auto px-6 max-w-4xl"
                    style={{ maxWidth: "1200px", margin: "0 auto", fontFamily: "var(--font-poppins)" }}
                >
                    {/* Header */}
                    <div className="mb-10 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>Privacy Policy</h1>
                        <div className="h-1 w-16 bg-blue-500 mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)" }}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="shadow-md rounded-lg overflow-hidden" style={{ fontFamily: "var(--font-poppins)" }}>
                        {/* Section 1 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    When you purchase something from our website, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    When you browse our website, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    <strong style={{ fontFamily: "var(--font-poppins)" }}>Email marketing (if applicable):</strong> With your permission, we may send you emails about our business, new products, and other updates.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 2 – CONSENT</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h3 className="text-lg font-semibold mb-3 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>How do you get my consent?</h3>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery, or return a purchase, we consider that you have given your consent for us to collect and use your information for that specific reason only.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.
                                </p>

                                <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>How do I withdraw my consent?</h3>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, or for the continued collection, use, or disclosure of your information, at any time, by contacting us at <a href="mailto:marketing@tetrahedron.in" className="text-blue-500 hover:underline" style={{ fontFamily: "var(--font-poppins)" }}>marketing@tetrahedron.in</a> or mailing us at Main Office: 204, Block A, Ecotech III, Noida, Khera Choganpur, Uttar Pradesh 201306, India.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 3 – DISCLOSURE</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    We may disclose your personal information if required by law or if you violate our Terms of Service.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 4 – PAYMENT</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    We use Razorpay for processing payments. We and Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    PCI-DSS requirements help ensure the secure handling of credit card information by our website and its service providers. For more insight, you may also want to read the terms and conditions of Razorpay at <a href="https://razorpay.com" className="text-blue-500 hover:underline" style={{ fontFamily: "var(--font-poppins)" }}>https://razorpay.com</a>.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 5 – THIRD-PARTY SERVICES</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 6 – SECURITY</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    We follow industry standards to protect your personal information from misuse or unauthorized access.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 7 – COOKIES</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    We use cookies to maintain session data. They are not used to personally identify you on other websites.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 8 – AGE OF CONSENT</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                                </p>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div className="border-b border-gray-100" style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>SECTION 9 – CHANGES TO THIS PRIVACY POLICY</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
                                </p>
                                <p className="mb-4 text-gray-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                    If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div style={{ fontFamily: "var(--font-poppins)" }}>
                            <div className="bg-gray-50 px-6 py-4" style={{ fontFamily: "var(--font-poppins)" }}>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>QUESTIONS AND CONTACT INFORMATION</h2>
                            </div>
                            <div className="px-6 py-4 bg-white" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p className="mb-6 text-gray-700" style={{ textAlign: 'left', fontFamily: "var(--font-poppins)" }}>
                                    If you would like to access, correct, amend, or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Officer at <a href="mailto:marketing@tetrahedron.in" className="text-blue-500 hover:underline" style={{ fontFamily: "var(--font-poppins)" }}>marketing@tetrahedron.in</a> or mail us at Main Office: 204, Block A, Ecotech III, Noida, Khera Choganpur, Uttar Pradesh 201306, India.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4" style={{ textAlign: 'left', fontFamily: "var(--font-poppins)" }}>
                                    <div className="flex" style={{ fontFamily: "var(--font-poppins)" }}>
                                        <div className="ml-3" style={{ fontFamily: "var(--font-poppins)" }}>
                                            <p className="text-sm text-blue-700" style={{ fontFamily: "var(--font-poppins)" }}>
                                                For any privacy-related concerns, please don't hesitate to reach out to us. We take your privacy seriously and will address your questions promptly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm text-gray-500" style={{ fontFamily: "var(--font-poppins)" }}>
                        Last updated: May 2025
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );
}