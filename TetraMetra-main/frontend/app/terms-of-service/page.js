import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function TermsOfServicePage() {
  // Configuration Variables
  const effectiveDate = "October 26, 2023";
  const companyName = "Tetrahedron";
  const companyWebsiteDomain = "tetrahedron.in";
  const companyWebsiteUrl = "https://www.tetrahedron.in";
  const companyEmail = "info@tetrahedron.in";
  const privacyPolicyPath = "/privacy-policy";

  return (
    <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Terms of Service">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div className="mb-10 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-800"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Terms of Service
            </h1>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4"></div>
            <p
              className="text-sm text-gray-600 mt-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Effective Date: {effectiveDate}
            </p>
          </div>
          
          {/* Content */}
          <div className="shadow-md rounded-lg overflow-hidden">
            {/* Section 1 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  1. Introduction and Acceptance
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Welcome to {companyName}. These Terms of Service ("Terms") govern your access to and use of the website located at {companyWebsiteDomain} (the "Website") and any related services, features, content, or applications offered by {companyName} (collectively, the "Services").
                </p>
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  By accessing or using the Website or Services, you agree to be bound by these Terms and our{" "}
                  <Link
                    href={privacyPolicyPath}
                    className="text-blue-500 hover:underline"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Privacy Policy
                  </Link>
                  . If you do not agree to these Terms or the Privacy Policy, you must not access or use the Website or Services. Please read these Terms carefully.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  2. Use of the Website and Services
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  You agree to use the Website and Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate {companyName}, a {companyName} employee, another user, or any other person or entity.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm {companyName} or users of the Services, or expose them to liability.</li>
                  <li>In any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Services.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  3. Intellectual Property Rights
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  The Website and Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {companyName}, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  These Terms permit you to use the Services for your personal, non-commercial use only, or for legitimate business purposes related to your role as a current or prospective customer, supplier, or partner of {companyName}. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as generally and ordinarily permitted through the Services according to these Terms.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  4. User Contributions (If Applicable)
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  [If your site allows user comments, submissions, forum posts, etc., include a section here outlining rules, ownership, and licenses related to that content. If not applicable, you can omit this section or state that user contributions are not permitted.]
                </p>
                {/* Example placeholder: <p>The Services may contain features that allow users to post, submit, publish, display, or transmit content. All user contributions must comply with these Terms...</p> */}
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  5. Disclaimers
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  The information presented on or through the Services is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
                </p>
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  YOUR USE OF THE WEBSITE AND SERVICES IS AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NEITHER {companyName} NOR ANY PERSON ASSOCIATED WITH {companyName} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  6. Limitation of Liability
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL {companyName}, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, OR ANY SERVICES OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  7. Indemnification
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  8. Governing Law and Jurisdiction
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  All matters relating to the Services and these Terms, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., India, or State of Delaware, USA] without giving effect to any choice or conflict of law provision or rule.
                </p>
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the courts located in [Your City/Region of Jurisdiction, e.g., Ludhiana, Punjab, India]. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-b border-gray-100">
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  9. Changes to the Terms of Service
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter. The date the Terms were last revised is identified at the top of the page.
                </p>
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <div className="bg-gray-50 px-6 py-4">
                <h2
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  10. Contact Information
                </h2>
              </div>
              <div className="px-6 py-4 bg-white">
                <p
                  className="mb-4 text-gray-700"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p
                    className="mb-1 text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    <span className="font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>Email:</span>{" "}
                    <a
                      href={`mailto:${companyEmail}`}
                      className="text-blue-500 hover:underline"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {companyEmail}
                    </a>
                  </p>
                  <p
                    className="text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    <span className="font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>Website:</span>{" "}
                    <a
                      href={companyWebsiteUrl}
                      className="text-blue-500 hover:underline"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {companyWebsiteUrl}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
}