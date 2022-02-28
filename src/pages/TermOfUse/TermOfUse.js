import FooterMenu from '../Home/Footer/FooterMenu';
import Copyright from '../Home/Footer/Copyright';
import DataContext from '../../contexts/DataContext';
import { useContext } from 'react';

const TermOfUse = () => {

    const {history} = useContext(DataContext);

    const goBack = () => {
        history.goBack();
    }
    return (
        <div className="term-of-use">
            <div className="term-sheet">
                <div className="title-term">
                    <div className="tools">
                        <div className="back-btn" onClick={goBack}>
                            <span className="iconify" data-icon="bi:arrow-left-short"></span>
                            <span className="iconify" data-icon="bi:arrow-left-circle-fill"></span>
                        </div>
                        <div>
                            <h3>Term of Use</h3>
                        </div>
                        <div></div>
                    </div>
                    <hr />
                </div>
                <div className="text-content-sheet">
                    <h5>Term of Use</h5>
                    <p>* The terms and conditions of use for Khom Rok are regulated by Cambodian law, and users agree to submit to the jurisdiction of Cambodian courts. Khom Rok disclaims all liability for the content of job advertising posted on this website, including images, text, job descriptions, advertisements, news, job contracts and/or conditions, and all other content that complies with your/our country's employment laws, regulations, and legislation. When using Khom Rok, users agree to take personal responsibility in accordance with your/our country's law, regulation, and legislation.</p> <br />
                    
                    <h5>Using Khom Rok</h5>
                    <ol>
                        <li>"Khom Rok" is a collective term for the online job-site search.</li>
                        <li>"Users" is a collective term for those using Khom Rok for the posting of job information, registered members, or anyone using Khom Rok's services.</li>
                        <li>Users should use Khom Rok at their own will and responsibility.</li>
                        <li>Khom Rok provides services to users on the condition that users accept all terms listed in this document. By using the site, Khom Rok assumes that Users have agreed to all terms.</li>
                        <li>Members <br />
                            <ul>
                                <li>"Members" are registered users who have been approved by Khom Rok Recruitment Agency</li>
                                <li>Khom Rok assumes Members have agreed to all Terms and Conditions upon registration.</li>
                                <li>By using one's own member's page within Khom Rok, Members can check, modify, add and delete all information entered upon registration and also the information relating to newsletter subscription at any time.</li>
                                <li>Members can delete their registration by themselves in their own member's page within Khom Rok.</li>
                                <li>If a Member does not log in to their member's page for a period of three years, his/her membership may be deleted without user' agreement.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Khom Rok Recruitment Agency reserves the right to stop/delete a Member's registration should he/she violate any of the said Terms.</p> <br />
                    
                    <h5>Prohibited Actions</h5>
                    <p>The purpose of Khom Rok is to assist individuals to find employment and companies to find suitable candidates. Preventing or interfering with those purposes is prohibited. Khom Rok, reserves the right to decide what is considered to be preventive action and / or interference to the said purpose and ban registration for anyone who violates these terms.</p>
                    <p>Examples of Prohibited Actions are listed below. Note: Khom Rok may also prohibit other acts not listed here:</p>
                    <ol>
                        <li>Registration and provision of false information.</li>
                        <li>Violation of copyright, trademark right, privacy right, image right, credit, property and other intellectual right of use.</li>
                        <li>Abuse and defamation to any individual and/or organization.</li>
                        <li>Violation of acts, public order and morals, or any action that potentially has negative effect to Khom Rok.</li>
                        <li>Antisocial acts.</li>
                        <li>Preventing Khom Rok's operation or damaging Khom Rok Recruitment Agency's reputation, or any other action that may negatively affect Khom Rok.</li>
                        <li>Using information gained through Khom Rok's service for reproduction, sales, publishing and other purposes beyond personal use. Using Khom Rok's information for commercial purpose or provision.</li>
                        <li>Accessing Khom Rok user's undisclosed data and accounts, or attempt to do so.</li>
                    </ol><br />
                    
                    <h5>Services and Information Provided by Khom Rok</h5>
                    <ol>
                        <li>Information on third parties shown on Khom Rok (such as Recruitment information, company information, personal information registered by Members, data, advertisements, graphics and links) are provided /disclosed at the responsibility of the said third party. Khom Rok  Recruitment Agency does not guarantee the accuracy of this information.</li>
                        <li>Information provided by Khom Rok may include some technical errors and typographical errors. While Khom Rok strives to produce a fault-free system / service, Khom Rok does not guarantee that the services are error / fault-free which may be of inconvenience to users.</li>
                        <li>Links embedded in Khom Rok, may take you to websites operated by third parties. These linked sites are not under the control of Khom Rok and Khom Rok is not responsible for the content of any linked site or any link contained in a linked site, or any changes or updates to such sites. Khom Rok  Recruitment Agency is providing these links only as a convenience to users, and the inclusion of any link does not imply endorsement by Khom Rok  Recruitment Agency of the site nor any commercial relationship with that site.</li>
                        <li>Some names of product, service and company, which are included in the information provided by Khom Rok, are protected by trademarks and intellectual property rights. Reference to these trademarks by Khom Rok does not mean that those trademarks are not protected by law. It does not mean that there is a commercial relationship with Khom Rok and the holders of those trademarks.</li>
                    </ol><br />

                    <h5>Disclaimer</h5>
                    <ol>
                        <li>Khom Rok Recruitment Agency is not responsible for any damage (such as emotional distress, interruption of job/CVs searching process and other damage including financial loss) caused by registering and using Khom Rok.</li>
                        <li>Due to personal information being acquired by third parties, Khom Rok is not responsible for the scenarios listed below: <br />
                            <ul>
                                <li>Users' actions when Users disclose their personal information by themselves to companies they wish to apply for by using Khom Rok's online functions or other means. Applying through Khom Rok means that users agree to disclose their personal information to the companies they applied to. After the application was made, the handling of personal information becomes the responsibility of each company the user applied to. Khom Rok  Recruitment Agency is not responsible for how any third party handles personal information. When users apply to companies directly (i.e. not through Khom Rok system) and disclose their personal information by themselves (such as sending resumes), Khom Rok  Recruitment Agency is not responsible for how each company handles one's personal information.</li>
                                <li>Khom Rok  Recruitment Agency is not responsible for disclosing personal information if the individual was identified by chance from information other than personal identification information provided by the user in one's profile.</li>
                            </ul>
                        </li>
                        <li>Links embedded in Khom Rok  Recruitment Agency websites may take you to websites operated by others. These linked sites are not under the control of Khom Rok  Recruitment Agency and Khom Rok  Recruitment Agency is not responsible for the content of any linked site or any link contained in a linked site, or any changes or updates to such sites.</li>
                    </ol><br />

                    <h5>Miscellaneous</h5>
                    <p>Khom Rok  Recruitment Agency is not responsible for damage / loss of information caused by computer viruses that cannot be prevented by general anti-virus measures, convulsion of nature, and other damages caused by reasons separate from Khom Rok's direct area of responsibility. Khom Rok  Recruitment Agency recommends that all users back up their own data.</p> <br />

                    <h5>Restitution</h5>
                    <p>User will accept claim for restitution either directly or indirectly, if a user acts in any way against the Terms and Conditions causing or potentially causing damage to Khom Rok  Recruitment Agency</p> <br />

                    <h5>Copyright/Intellectual Property Rights, Content, and Links</h5>
                    <p>Copyrights and Intellectual Property Rights of all information provided by Khom Rok (such as contents and information) belong to Khom Rok. However, information such as product name, company name and logos include trademarks and registered trademarks possessed by each company.</p> <br />

                    <h5>Changing Khom Rok's services</h5>
                    <p>Khom Rok  Recruitment Agency may, without prior notice, modify or discontinue its services temporarily or on long-term basis, or terminate its service and the users agree to such condition.</p> <br />

                    <h5>Modifying Terms of Use</h5>
                    <p>Khom Rok  Recruitment Agency can modify Terms of Use at any time. The modification is made by revising this page.</p> <br />

                    <p>Contact: <a href="/">khomrok@gmail.com</a></p>
                    <p>Phnom Penh Cambodia</p>
                </div>
            </div>

            <FooterMenu />
            <Copyright />
        </div>
    )
}

export default TermOfUse;
