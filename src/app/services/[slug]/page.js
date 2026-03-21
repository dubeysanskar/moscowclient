import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import FaqAccordion from '@/components/faq-accordion';

const servicesData = {
    'cleaners': {
        title: 'Cleaners Manpower Services',
        metaDesc: 'Hire skilled cleaners manpower for GCC & global industries.',
        images: ['/service-and-blog/Cleaners.jpeg', '/service-and-blog/Cleaners2.jpeg'],
        intro: 'Taha Airwaves is a leading manpower outsourcing consultancy specializing in cleaners manpower supply for domestic and international requirements. With 10+ years of experience in workforce solutions and deployment, we provide qualified and verified cleaners across Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, Malaysia, and Russia.',
        detailedDesc: 'Our comprehensive cleaners staffing services cater to a wide range of industry demands, including hospitality, oil & gas, healthcare, construction, manufacturing, and corporate organizations.',
        types: ['General Cleaners – Everyday sanitation and maintenance.', 'Deep Clean Specialists – Intensive cleaning for facilities and large spaces.', 'Janitors & Maintenance Staff – Regular cleaning, waste handling, and space upkeep.', 'Industrial Cleaners – Specialized cleaning for factories, warehouses, and sites.', 'Hospital & Healthcare Cleaners – Hygiene compliance roles for medical environments.', 'Hospitality & Housekeeping Teams – Hotel, resort, and guest-service cleaning professionals.'],
        industries: ['Hospitality & Hotel Sector', 'Healthcare & Pharmaceuticals', 'Construction & Engineering', 'Oil & Gas', 'Logistics & Manufacturing', 'Banking, Financial Services & Corporate Offices'],
        process: ['Requirement Analysis – Understanding your project scope, number of cleaners needed, and country regulations.', 'Candidate Sourcing – Identifying suitable candidates from our verified talent pool.', 'Screening & Evaluation – Identity verification, background checks, skill assessments.', 'Client Matching – Sharing shortlisted profiles for final client approval.', 'Documentation & Mobilization – Compliance formalities, visa processing, and departure coordination.'],
        benefits: ['Access to verified and experienced cleaners across multiple countries', 'Industry-ready personnel trained for your specific environment', 'Reduced HR burden and administrative workload', 'Fast turnaround and mobilization support', 'Full documentation and compliance handling'],
        faqs: [{ q: 'Which countries do you supply cleaners to?', a: 'We provide cleaners manpower to Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, Malaysia, and Russia.' }, { q: 'Are cleaners verified before deployment?', a: 'Yes, every cleaner undergoes screening, background checks, and verification before placement.' }, { q: 'Can you supply cleaners for hotel and hospitality needs?', a: 'Absolutely. We provide housekeeping and cleaning teams for hotels, resorts, and service apartments.' }, { q: 'Do you handle documentation for overseas deployment?', a: 'Yes, we manage visas, travel documentation, and regulatory compliance processes.' }],
    },
    'all-types-of-drivers': {
        title: 'All Types of Drivers Manpower Services',
        metaDesc: 'Hire skilled light, heavy & commercial drivers for GCC & global projects.',
        images: ['/service-and-blog/drivers.jpeg', '/service-and-blog/drivers.jpeg'],
        intro: 'Taha Airwaves is a trusted manpower outsourcing consultancy providing all types of professional drivers for domestic and international projects across GCC, Russia, and global markets.',
        detailedDesc: 'Our driver manpower solutions meet the operational demands of logistics companies, construction firms, oil & gas contractors, hospitality groups, and corporate organizations.',
        types: ['Light Vehicle Drivers – For corporate transport, staff mobility, and executive travel.', 'Heavy Vehicle Drivers – For trucks, trailers, tankers, and logistics fleets.', 'Bus Drivers – For institutional, workforce, and public transportation.', 'Construction Vehicle Drivers – For heavy equipment and site-based mobility.', 'Delivery & Commercial Drivers – For distribution and supply chain operations.', 'Executive Chauffeurs – For VIP and corporate transport requirements.'],
        industries: ['Construction & Engineering', 'Oil & Gas', 'Logistics & Supply Chain', 'IT & Non-IT Corporates', 'Banking & Financial Services', 'Manufacturing & Automobiles'],
        process: ['Requirement Understanding – Analyzing vehicle category, experience level, and compliance needs.', 'Sourcing & Screening – Shortlisting from our verified talent pool.', 'License & Background Verification – Driving licenses and history validated.', 'Client Approval – Profiles shared for final selection.', 'Documentation & Mobilization – Visa processing, documentation, and travel coordination.'],
        benefits: ['Experienced manpower outsourcing consultancy', 'Strong deployment network across GCC & global markets', 'Verified and licensed driver database', 'Fast recruitment turnaround time', 'Complete documentation and compliance handling'],
        faqs: [{ q: 'Which countries do you supply drivers to?', a: 'We supply drivers to Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, Malaysia, and Russia.' }, { q: 'Do you verify driving licenses before deployment?', a: 'Yes, all driving licenses are validated as per vehicle category and country requirements.' }, { q: 'Can you provide heavy truck drivers for construction?', a: 'Yes, we supply experienced heavy vehicle drivers for construction and infrastructure projects.' }],
    },
    'general-labour': {
        title: 'Skilled General Labour Manpower Services',
        metaDesc: 'Hire skilled general labour manpower for GCC & global projects.',
        images: ['/service-and-blog/General-labours.jpeg', '/service-and-blog/General-labours.jpeg'],
        intro: 'Taha Airwaves is a trusted consultancy specializing in the recruitment and deployment of skilled and reliable general labour manpower across GCC, Russia, and global markets.',
        detailedDesc: 'We provide disciplined, physically fit, and task-ready general workers to support large-scale industrial operations, infrastructure projects, logistics networks, and commercial establishments.',
        types: ['Construction Labourers – For civil works, site preparation, material handling.', 'Warehouse & Loading Workers – For cargo handling, packing, unloading, sorting.', 'Factory & Manufacturing Helpers – For production line assistance and plant maintenance.', 'Industrial Site Workers – For oil & gas fields, engineering projects, and plant operations.', 'Hospitality Support Staff – For housekeeping assistance, kitchen helpers, and facility maintenance.', 'Maintenance & Utility Labour – For cleaning, general repairs assistance, and facility upkeep.'],
        industries: ['Construction & Engineering', 'Oil & Gas', 'Manufacturing & Automobiles', 'Logistics & Supply Chain', 'Healthcare & Pharmaceuticals', 'Hospitality, Hotel & Restaurant'],
        process: ['Requirement Assessment – Understanding project scope, skill needs, and country regulations.', 'Candidate Sourcing – Shortlisting from our verified labour database.', 'Screening & Fitness Check – Evaluating physical capability, discipline, and safety awareness.', 'Documentation & Compliance – Managing paperwork, visa coordination, and legal formalities.', 'Mobilization & Deployment – Coordinating travel and site placement.'],
        benefits: ['Strong manpower network across GCC & international markets', 'Professionally screened and disciplined workforce', 'Compliance-driven overseas deployment process', 'Quick mobilization for urgent project requirements', 'Industry-specific manpower customization'],
        faqs: [{ q: 'Which countries do you supply general labour to?', a: 'We deploy manpower to Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, Malaysia, and Russia.' }, { q: 'Are general labourers screened before deployment?', a: 'Yes, all candidates undergo screening, background verification, and fitness evaluation.' }],
    },
    'loading-unloading-workers': {
        title: 'Loading & Unloading Workers Manpower Supply',
        metaDesc: 'Hire skilled loading & unloading workers for GCC and global logistics.',
        images: ['/service-and-blog/Loading-unloading-workers.jpeg', '/service-and-blog/Loading-unloading-workers2.jpeg'],
        intro: 'Taha Airwaves provides verified and deployment-ready loading & unloading workers for businesses across GCC, Russia, and global markets.',
        detailedDesc: 'Our loading and unloading manpower services support logistics firms, warehousing companies, distribution networks, construction operations, and port authorities.',
        types: ['Cargo Loaders & Unloaders – Manual handling of incoming and outgoing shipments.', 'Warehouse Loading Staff – Sorting, stacking, and organizing goods.', 'Dock & Port Workers – Handling container cargo, ship-to-shore operations.', 'Palletizers & Stacking Workers – Arranging products on pallets for dispatch.', 'Material Movers – Transferring materials between production, storage, and loading zones.'],
        industries: ['Logistics & Supply Chain', 'Manufacturing & Industrial', 'Construction & Engineering', 'Oil & Gas', 'Retail & Distribution'],
        process: ['Requirement Assessment – Understanding project scope and safety needs.', 'Candidate Sourcing – Identifying suitable workers from our verified talent pool.', 'Screening & Evaluation – Background checks and safety assessment.', 'Documentation & Compliance – Handling paperwork and visa processing.', 'Mobilization & Deployment – Coordinating travel logistics and on-site integration.'],
        benefits: ['Verified and disciplined manpower pool', 'Cross-country deployment capabilities', 'Safety-oriented workforce', 'Flexible manpower solutions for all project types'],
        faqs: [{ q: 'Which countries do you supply workers to?', a: 'We supply across GCC countries, Jordan, Egypt, Mauritius, Malaysia, and Russia.' }, { q: 'Are workers physically assessed before deployment?', a: 'Yes, we assess physical capability, stamina, and fitness for task readiness.' }],
    },
    'factory-helpers': {
        title: 'Factory Helpers Manpower Supply',
        metaDesc: 'Hire skilled factory helpers for GCC & global industries.',
        images: ['/service-and-blog/Factory-helpers.jpeg', '/service-and-blog/Factory-helpers2.jpeg'],
        intro: 'Taha Airwaves provides professional Factory Helpers manpower supply services tailored to businesses across GCC, Russia, and global markets.',
        detailedDesc: 'Our recruitment expertise focuses on delivering dependable, task-ready factory helpers experienced in supporting manufacturing lines, production units, and plant maintenance.',
        types: ['Production Line Helpers – Support for assembly lines and manufacturing stages.', 'Machine Operation Assistants – Support staff for CNC, packaging, and industrial machinery.', 'Material Handling Helpers – Movement, sorting, and staging of raw materials.', 'Quality Check Assistants – Support in inspecting finished products.', 'Plant Maintenance Helpers – Facility cleaning, equipment upkeep, and minor repair assistance.'],
        industries: ['Manufacturing & Automobiles', 'Logistics & Warehousing', 'Construction & Engineering', 'Oil & Gas', 'Healthcare', 'Hospitality'],
        process: ['Requirement Assessment – Understanding project scope and factory needs.', 'Candidate Sourcing – Shortlisting from verified talent pool.', 'Skill & Safety Screening – Evaluating skill level and safety awareness.', 'Documentation & Compliance – Managing paperwork and visa coordination.', 'Mobilization & Deployment – Travel coordination and site integration.'],
        benefits: ['Skilled, task-ready factory workers', 'Safety-aware and discipline-focused workforce', 'Comprehensive documentation support', 'Flexible solutions for short, long, and seasonal projects'],
        faqs: [{ q: 'Which countries do you provide factory helpers to?', a: 'We supply to Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Mauritius, Malaysia, and Russia.' }, { q: 'Are factory helpers screened for safety?', a: 'Yes, all candidates undergo skill verification, physical assessment, and safety awareness checks.' }],
    },
    'barista': {
        title: 'Skilled Barista Workers Manpower Services',
        metaDesc: 'Hire skilled barista workers for GCC & global hospitality projects.',
        images: ['/service-and-blog/Barista-workers.jpeg', '/service-and-blog/Barista-workers.jpeg'],
        intro: 'Taha Airwaves provides reliable barista workers manpower supply services to businesses across GCC, Russia, and global markets.',
        detailedDesc: 'Our specialized recruitment solutions deliver experienced, disciplined, and customer-oriented baristas who enhance your beverage service quality while ensuring operational efficiency.',
        types: ['Experienced Café Baristas – Skilled in specialty coffee and beverage presentation.', 'Hotel & Resort Baristas – Professional baristas for high-end clientele.', 'Event & Catering Baristas – Mobile service baristas for corporate events.', 'Retail Coffee Shop Staff – Fast-paced baristas for busy QSR and café environments.'],
        industries: ['Coffee Shops & Cafes', 'Hotels & Resorts', 'Restaurants & QSR Chains', 'Corporate Food Courts', 'Event & Catering Services'],
        process: ['Requirement Understanding – Analyzing service style and skill expectations.', 'Candidate Sourcing – Shortlisting from our hospitality talent pool.', 'Skill & Service Assessment – Evaluating coffee preparation and customer service.', 'Client Review – Sharing profiles for final selection.', 'Documentation & Deployment – Visa, medical, and travel coordination.'],
        benefits: ['Pre-trained, customer-oriented barista workforce', 'Skilled in specialty coffee and latte art', 'Deployment-ready with compliance documentation', 'Flexible staffing for permanent and seasonal roles'],
        faqs: [{ q: 'Which countries do you supply barista workers to?', a: 'We supply to Saudi Arabia, UAE, Qatar, Kuwait, Oman, and beyond.' }, { q: 'Are barista workers trained before deployment?', a: 'Yes, we supply baristas with verified coffee preparation skills and service training.' }],
    },
    'packing-workers': {
        title: 'Skilled Packing Workers Manpower Services',
        metaDesc: 'Hire skilled packing workers across GCC & global industries.',
        images: ['/service-and-blog/Packers-workers.jpeg', '/service-and-blog/Packers-workers.jpeg'],
        intro: 'Taha Airwaves provides professional Packing Workers manpower supply services designed to meet the needs of businesses across GCC, Russia, and global markets.',
        detailedDesc: 'We specialize in sourcing, screening, and deploying dependable packing workers with expertise in packing, sorting, inspection, labeling, and material preparation.',
        types: ['General Packing Workers – Routine packing, sealing, labeling, and packaging.', 'Material Preparation Packers – Preparing packing materials and inventory staging.', 'Quality Control Packing Staff – Inspecting product quality before packing.', 'Labeling & Documentation Helpers – Proper labeling, tagging, and shipping preparation.', 'Container & Pallet Packing Labour – Loading pallets and stuffing containers.'],
        industries: ['Logistics & Supply Chain', 'Manufacturing & Automobiles', 'Construction & Engineering', 'Oil & Gas', 'Retail & E-Commerce'],
        process: ['Requirement Assessment – Understanding packing needs and compliance.', 'Candidate Sourcing – Identifying workers from our verified talent pool.', 'Screening & Evaluation – Task-specific ability checks and background verification.', 'Documentation & Compliance – Handling paperwork and visa processing.', 'Mobilization & Deployment – Travel logistics and on-site integration.'],
        benefits: ['Verified and disciplined packing workforce', 'Attention to detail and quality standards', 'Cross-country deployment capabilities', 'Flexible solutions for seasonal and project needs'],
        faqs: [{ q: 'Which countries do you supply packing workers to?', a: 'We supply to GCC countries, Russia, and beyond.' }, { q: 'Can workers handle quality control packing?', a: 'Yes, we supply workers trained in inspection and quality control packing.' }],
    },
    'emigration-immigration-clearance': {
        title: 'Emigration & Immigration Clearance Services',
        metaDesc: 'Structured emigration and immigration clearance services for cross-border workforce deployment.',
        images: ['/service-and-blog/Immigration-clearance.jpeg', '/service-and-blog/Immigration-clearance2.jpeg'],
        intro: 'Taha Airwaves delivers structured Emigration and Immigration Clearance Services aligned with Indian regulatory authorities and destination-country immigration frameworks.',
        detailedDesc: 'Our structured compliance process ensures documentation accuracy, verified candidate records, employer documentation validation, and alignment with jurisdictional requirements across India and GCC countries.',
        types: ['Emigration Clearance – POE registration and Indian emigration compliance.', 'Immigration Documentation – Visa processing and destination country clearance.', 'Contract Validation – Employment contract review and compliance checks.', 'Regulatory Submissions – Government liaison and authority coordination.', 'Bulk Workforce Clearance – Large-scale deployment documentation.'],
        industries: ['All GCC-Bound Employment', 'Construction & Engineering', 'Oil & Gas', 'Manufacturing', 'Facilities Management', 'Hospitality'],
        process: ['Documentation Collection – Gathering worker and employer documents.', 'Verification & Validation – Cross-checking all records for accuracy.', 'Regulatory Submission – Filing with appropriate authorities.', 'Status Tracking – Monitoring clearance progress and timelines.', 'Final Clearance & Handover – Completing all formalities for deployment.'],
        benefits: ['Process-driven clearance framework', 'Regulatory compliance across jurisdictions', 'Structured documentation validation', 'Transparent execution timelines', 'Operational accountability at every stage'],
        faqs: [{ q: 'What is included in emigration clearance?', a: 'We manage documentation verification, regulatory submissions, contract validation, and coordination with authorized authorities.' }, { q: 'Do you handle GCC immigration clearance?', a: 'Yes, we coordinate immigration documentation and compliance for all GCC countries.' }],
    },
    'document-attestation-services': {
        title: 'Document Attestation Services',
        metaDesc: 'Professional document attestation and legalization services for cross-border workforce deployment.',
        images: ['/service-and-blog/Document-attestation.jpeg', '/service-and-blog/Document-attestation.jpeg'],
        intro: 'Taha Airwaves delivers structured Document Attestation Services aligned with regulatory authorities and destination-country legal frameworks.',
        detailedDesc: 'The service supports lawful cross-border workforce deployment by ensuring all documents are authenticated, validated, and recognized by relevant government and embassy authorities.',
        types: ['Educational Certificates – Degree, diploma, and transcript attestation.', 'Technical & Professional Qualifications – Trade certificates and skill attestation.', 'Experience Certificates – Employment and work experience validation.', 'Employment Contracts – Contract legalization and authentication.', 'Commercial & Corporate Documents – Business and organizational documents.'],
        industries: ['All Industries Requiring Overseas Deployment', 'Construction', 'Oil & Gas', 'Healthcare', 'IT & Corporate', 'Hospitality'],
        process: ['Document Collection – Gathering original documents.', 'State-Level Authentication – HRD and Home Department attestation.', 'MEA Attestation – Ministry of External Affairs authentication.', 'Embassy Attestation – Destination country embassy legalization.', 'Document Return – Secure delivery of attested documents.'],
        benefits: ['End-to-end attestation coordination', 'MEA and embassy attestation handled', 'Apostille services for applicable countries', 'Secure document handling and tracking'],
        faqs: [{ q: 'What documents can be attested?', a: 'We handle educational certificates, employment contracts, experience letters, and commercial documents.' }, { q: 'Do you handle embassy attestation?', a: 'Yes, we coordinate attestation with embassies of GCC and other destination countries.' }],
    },
    'hajj-umrah-travel-services': {
        title: 'Hajj & Umrah Travel Services',
        metaDesc: 'Comprehensive Hajj and Umrah travel coordination including visa processing, accommodation, and guided support.',
        images: ['/service-and-blog/Hajj-umrah-travell-service.jpeg', '/service-and-blog/Hajj-umrah-travell-service2.jpeg'],
        intro: 'Taha Airwaves provides comprehensive Hajj and Umrah travel coordination services designed to support pilgrims with structured, reliable, and compliant travel arrangements.',
        detailedDesc: 'Our Hajj & Umrah travel services include itinerary planning, visa processing, accommodation, transportation, and on-ground support.',
        types: ['Travel Coordination & Itinerary Planning – Complete travel schedules.', 'Visa Processing & Documentation – Hajj/Umrah visa application and compliance.', 'Accommodation Arrangements – Hotel stays near major Haram sites.', 'Ground Transportation – Transfers between cities and holy sites.', 'Guided Support & Welfare – On-ground guidance and welfare coordination.', 'Group Management – Customized services for groups and families.'],
        industries: ['Individual Pilgrims', 'Families', 'Religious Groups & Community Organizations', 'Corporate Pilgrimage Sponsors'],
        process: ['Consultation – Understanding travel dates, group size, and preferences.', 'Documentation & Visa – Processing visa applications.', 'Travel Planning – Itinerary design and flight arrangements.', 'Accommodation & Transport – Hotel and ground logistics.', 'Departure & On-Ground Support – Travel coordination and welfare assistance.'],
        benefits: ['End-to-end pilgrimage coordination', 'Government-compliant visa processing', 'Accommodation near Haram sites', 'Ground transportation support'],
        faqs: [{ q: 'What services are included?', a: 'We provide visa processing, accommodation, transportation, itinerary planning, and on-ground support.' }, { q: 'Do you handle group pilgrimages?', a: 'Yes, we offer tailored services for individuals, families, and groups.' }],
    },
    'employee-outsourcing-solutions': {
        title: 'Employee Outsourcing Solutions',
        metaDesc: 'Structured employee outsourcing solutions for Gulf-based employers requiring compliant Indian manpower deployment.',
        images: ['/service-and-blog/employe-outsourcing-.jpeg', '/service-and-blog/Employee-outsourcing2.jpeg'],
        intro: 'Taha Airwaves provides structured Employee Outsourcing Solutions designed for employers requiring compliant, scalable, and deployment-ready manpower.',
        detailedDesc: 'Employee outsourcing enables employers to focus on core operations while workforce administration, compliance coordination, and cross-border processes are centrally managed.',
        types: ['Contract Staffing – Fixed-term workforce supply aligned with project schedules.', 'Temporary Workforce – Short-duration manpower for peak periods.', 'Permanent Placement – Long-term recruitment for core roles.', 'Payroll Management – Salary processing and compliance coordination.', 'Compliance Administration – Labor law adherence and documentation management.'],
        industries: ['Construction & Infrastructure', 'Oil & Gas Operations', 'Manufacturing Facilities', 'Industrial Plants', 'Facilities Management Services'],
        process: ['Workforce Assessment – Understanding requirements, roles, and timelines.', 'Recruitment & Screening – Sourcing and verifying candidates.', 'Compliance & Documentation – Managing all regulatory requirements.', 'Deployment & Mobilization – Coordinating travel and on-site placement.', 'Ongoing Support – Payroll, contract management, and renewal tracking.'],
        benefits: ['Centralized workforce administration', 'Compliance-driven deployment process', 'Predictable mobilization schedules', 'Reduced administrative burden', 'Scalable workforce solutions'],
        faqs: [{ q: 'What are employee outsourcing solutions?', a: 'Structured workforce deployment where recruitment, compliance, documentation, and mobilization are managed by a manpower infrastructure partner.' }, { q: 'Which industries benefit from outsourcing?', a: 'Construction, oil & gas, manufacturing, facilities management, and industrial sectors across the GCC.' }],
    },
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = servicesData[slug] || {};
    return {
        title: `${service.title || 'Service'} — Taha Airwaves`,
        description: service.metaDesc || 'Manpower recruitment services by Taha Airwaves.',
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return (
            <div style={{ padding: '120px 24px', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2.5rem', marginBottom: '16px', color: '#1a0a10' }}>Service Not Found</h1>
                <p style={{ color: '#6B7280', marginBottom: '24px', fontSize: '1.1rem', fontFamily: 'var(--font-poppins)' }}>The service you are looking for does not exist.</p>
                <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '9999px', background: '#8E0935', color: '#FDFBEF', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, fontFamily: 'var(--font-lato)' }}>View All Services</Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="relative" style={{ height: '50vh', minHeight: '350px' }}>
                <Image src={service.images?.[0] || '/images/demo4.jpeg'} alt={service.title} fill className="object-cover" style={{ objectPosition: 'center 35%' }} priority />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(26,10,16,0.6) 0%, rgba(26,10,16,0.85) 100%)' }} />
                <div className="relative z-10 h-full flex flex-col justify-end max-w-[1100px] mx-auto px-6 pb-12">
                    <h1 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FDFBEF', marginBottom: '12px' }}>{service.title}</h1>
                    <p style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: 'rgba(253,251,239,0.7)', maxWidth: '600px' }}>{service.metaDesc}</p>
                </div>
            </section>

            {/* Content */}
            <section style={{ background: '#FDFBEF' }} className="py-16">
                <div className="max-w-[1100px] mx-auto px-6 space-y-16">

                    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#BC264B]" style={{ color: '#8E0935', fontFamily: 'var(--font-lato)' }}>
                        ← Back to All Services
                    </Link>

                    {/* Intro */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#1a0a10', marginBottom: '16px' }}>
                                About This <span style={{ color: '#8E0935' }}>Service</span>
                            </h2>
                            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, marginBottom: '12px' }}>{service.intro}</p>
                            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.8 }}>{service.detailedDesc}</p>
                        </div>
                        {service.images?.[1] && (
                            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
                                <Image src={service.images[1]} alt={service.title} fill className="object-cover" />
                            </div>
                        )}
                    </div>

                    {/* What We Provide */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#1a0a10', marginBottom: '8px' }}>
                            What We <span style={{ color: '#8E0935' }}>Provide</span>
                        </h2>
                        <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.9rem', color: '#6B7280', marginBottom: '24px' }}>
                            Comprehensive workforce solutions tailored to your specific requirements
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.types.map((t, i) => {
                                const parts = t.split(' – ');
                                return (
                                    <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)' }}>
                                        <FaCheckCircle className="text-[#8E0935] flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 style={{ fontFamily: 'var(--font-lato)', fontSize: '0.95rem', fontWeight: 700, color: '#1a0a10' }}>{parts[0]}</h3>
                                            {parts[1] && <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.85rem', color: '#6B7280', marginTop: '4px' }}>{parts[1]}</p>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#1a0a10', marginBottom: '16px' }}>
                            Industries We <span style={{ color: '#8E0935' }}>Serve</span>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {service.industries.map((ind) => (
                                <span key={ind} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(142,9,53,0.08)', color: '#8E0935', fontFamily: 'var(--font-lato)' }}>{ind}</span>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#1a0a10', marginBottom: '24px' }}>
                            Our <span style={{ color: '#8E0935' }}>Process</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {service.process.map((step, i) => {
                                const parts = step.split(' – ');
                                return (
                                    <div key={i} className="p-5 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)' }}>
                                        <div className="text-2xl font-bold mb-3" style={{ color: '#BC264B', fontFamily: 'var(--font-oswald)' }}>{i + 1}</div>
                                        <h3 style={{ fontFamily: 'var(--font-lato)', fontSize: '1rem', fontWeight: 700, color: '#1a0a10', marginBottom: '6px' }}>{parts[0]}</h3>
                                        {parts[1] && <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.85rem', color: '#6B7280' }}>{parts[1]}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="p-8 rounded-2xl" style={{ background: '#1a0a10' }}>
                        <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#FDFBEF', marginBottom: '20px' }}>
                            Why Choose <span style={{ color: '#BC264B' }}>Taha Airwaves</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FaCheckCircle style={{ color: '#BC264B', flexShrink: 0 }} />
                                    <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '0.9rem', color: 'rgba(253,251,239,0.7)' }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2rem', fontWeight: 600, color: '#1a0a10', marginBottom: '20px' }}>
                            Frequently Asked <span style={{ color: '#8E0935' }}>Questions</span>
                        </h2>
                        <FaqAccordion faqs={service.faqs} />
                    </div>

                    {/* CTA */}
                    <div className="text-center p-10 rounded-2xl" style={{ background: '#8E0935' }}>
                        <h3 style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: '#FDFBEF', marginBottom: '12px' }}>
                            Need {service.title}?
                        </h3>
                        <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '1rem', color: 'rgba(253,251,239,0.7)', marginBottom: '24px' }}>
                            Contact us today for a free consultation and custom workforce quote.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.1em]"
                                style={{ background: '#FDFBEF', color: '#8E0935', fontFamily: 'var(--font-lato)' }}>Get a Quote</Link>
                            <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.1em]"
                                style={{ background: 'transparent', color: '#FDFBEF', border: '1px solid rgba(253,251,239,0.4)', fontFamily: 'var(--font-lato)' }}>
                                <FaWhatsapp /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
