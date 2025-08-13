// app/blog/[slug]/page.tsx
import Flag from 'react-world-flags'
import DomainesTable from '@/public/DomainesTable';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const blogDetails = {
  "blog-1": {
    title: "Un mois d’août pour célébrer la fierté, le bien-être et la force de la jeunesse",
    imageUrl: "/blog1.jpg",
    content: (
      <div className="space-y-6">
        <div className="flex flex-row gap-2 justify-center items-center mb-3">
          <div className='w-6 h-4'>
            <Flag code="BJ" height={10} />
          </div>
          <p className="text-[16px] font-bold text-red-700 leading-relaxed">
            Août 2025 : un mois pour célébrer notre fierté collective et la puissance de la jeunesse !
          </p>
        </div>
        <p>
          Chaque année, ce mois symbolise l’unité nationale et l’espoir. Pour la jeunesse béninoise, c’est une invitation puissante à recharger ses forces par des activités de loisirs, tout en renforçant son rôle d’acteur clé du progrès citoyen.
        </p>

        
        <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Introduction</h2>
        <h3 className="text-2xl font-bold text-red-700">I – L’unité nationale, socle de notre force commune</h3>
        <div className="text-gray-700">
          <p>
            L’<span className="text-red-700">unité nationale</span> nationale n’est pas juste une notion historique ; c’est un engagement quotidien pour bâtir un Bénin uni, fier et progressiste. La célébration du 1er août rappelle aux jeunes qu’ils sont à la fois héritiers d’un riche passé et bâtisseurs d’un avenir meilleur.
            Le sentiment d’appartenance à la nation renforce la cohésion sociale et stimule l’enthousiasme à s’investir dans la communauté <span className='flex flex-row'><Flag code="BJ" height={10} className='size-6'/>🤝🔥</span>
          </p>
        </div>

        
        <div className="my-8">
          <img 
            src="/ppl.jpg" 
            alt="Content related image" 
            className="w-full h-auto object-cover rounded-lg shadow-md max-w-md mx-auto"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-red-700">II – Les loisirs, moteur incontournable du bien-être et du développement des jeunes</h3>

        
        <p className="text-gray-700">
          Les activités de loisirs ne sont pas qu’un simple divertissement ; elles constituent un levier essentiel pour le développement intellectuel, social et comportemental des jeunes. Que ce soit par le sport 🏀, les arts 🎨, la lecture 📚 ou les ateliers participatifs, ces moments de détente favorisent :
        </p>
        <p>•	La gestion du stress et de la santé mentale</p>
        <p>•	Le développement de compétences clés (créativité, communication, esprit d’équipe)</p>
        <p>•	La construction d’un équilibre vie personnelle / sociale</p>

        <p>Le gouvernement béninois reconnaît d’ailleurs le droit aux loisirs comme un droit fondamental nourrissant la qualité de vie et l’épanouissement.</p>

        <div className="my-8">
          <img 
            src="/ppl2.jpg" 
            alt="Content related image" 
            className="w-full h-auto object-cover rounded-lg shadow-md max-w-md mx-auto"
          />
        </div>

        <h3 className="text-2xl font-bold text-red-700">III – La jeunesse, force vive de l’engagement citoyen et du développement communautaire</h3>
          <p>Plus que jamais, la jeunesse béninoise est un actrice centrale du changement social. En participant activement à des projets associatifs, des actions de solidarité, ou des initiatives culturelles, elle construit les bases d’une société plus équitable et solidaire.
          Août est aussi le moment idéal pour s’engager localement : bénévolat, participation aux événements, ateliers éducatifs ou même simple partage d’expériences.
          L’engagement citoyen est le moteur d’une transformation durable, portée par des jeunes conscients et responsables. 🌍👥✨</p>

       <div className="my-8">
          <img 
            src="/ppl3.jpg" 
            alt="Content related image" 
            className="w-full h-auto object-cover rounded-lg shadow-md max-w-md mx-auto"
          />
        </div>

        <h3 className="text-2xl font-bold text-red-700">IV – Idées pour s’engager cet été et invitation à partager</h3>
          <p>Cet été, pourquoi ne pas :</p>
          <p>•	Rejoindre ou organiser une activité de loisirs éducatifs ?</p>
          <p>•	Participer à une action citoyenne dans ta communauté ?</p>
          <p>•	Partager tes initiatives et réussites sur les réseaux sociaux avec #JeunesseBéninoise et #FiertéBénin ?</p>

          <p>Partage-nous tes histoires, inspire la communauté et bâtissons ensemble un réseau de jeunes motivés et solidaires !</p>

          <h3 className="text-2xl font-bold text-red-700">Conclusion</h3>

          <p>Août 2025 est une période d’espoir, d’énergie et d’engagement. Que chaque jeune béninois saisisse cette occasion pour nourrir sa fierté, son bien-être et sa force d’action. Ensemble, faisons de ce mois un temps fort du renouveau et du progrès au Bénin ! ✨💪</p>
      </div>
    ),
  },
  "blog-2": {
    title: "RECRUTEMENT DE DEUX ANIMATEURS COMMUNAUTAIRES",
    imageUrl: "/blog2.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-red-700 leading-relaxed">
          L’Association Pour l’Education, la Sexualité et la Santé en Afrique (APESSA), est une association à but non lucratif qui met en œuvre les concepts de « l’Education à la Santé Sexuelle » dans les écoles, collèges et lycées du Bénin.
        </p>
        
        <p className="text-gray-700">
          Dans le but de renforcer son personnel et de permettre aux jeunes d’être bénéficiaires de nos services, l’APESSA lance un appel à recrutement de deux stagiaires en animations communautaires.
        </p>
        <h3 className='text-red-700'>I- PROFIL EN ANIMATION COMMUNAUTAIRE</h3>
        <p>Le stagiaire en Animation communautaire ou sociale</p>
        <p>•	Une lettre de motivation adressée à la Présidente de l’APESSA ;</p>
          <p>•	Une copie du CV signé et daté ;</p>
          <p>•	Copie du diplôme équivalent au poste ;</p>
          <p>•	Deux (Copies) d’attestation de bonne fin d’exécution ;</p>
          <p>•	Une proposition du casier judiciaire.</p>
          <p>•	Copie de la carte CIP/Photo d’identité ;</p>
          <h3>•	AUTRES</h3>
          <p>•	Titre : Stagiaire animateur</p>
          <p>•	Type de contrat : Contrat de benevolat</p>
          <p>•	 Durée du contrat : Six (06) mois renouvelable</p>
          <p>•	Prise de fonction : Immédiate</p>

        <p>•	Lieu : Calavi saint louis </p>

        <i>Seuls (es) les candidats (es) présélectionnés (es) seront contactés (es) par mail ou par téléphone pour la suite de la sélection.</i>

        <p>Les personnes intéressées par la présente offre doivent envoyer leurs candidatures au Secrétariat de l’APESSA situé à Abomey Calavi, Quartier St Louis, Maison HOUESSOU Réné, Tél +229 61 87 23 32 au plus tard le 22 Décembre 2023 à 16h00.</p>

        <p>Toute demande de clarification doit être envoyée par écrit ou par email aux adresses suivantes :  rhjunior@apessa.net en mettant en copie les adresses mails, cse@apessa.net,  secretariat@apessa.net rbaparakou@apessa.net</p>

      </div>   
    ),
  },

    "blog-3": {
    title: "RECRUTEMENT DE DEUX GESTIONNAIRES DE PROJETS",
    imageUrl: "/blog3.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-red-700 leading-relaxed">
          L’Association Pour l’Education, la Sexualité et la Santé en Afrique (APESSA), est une association à but non lucratif qui met en œuvre les concepts de « l’Education à la Santé Sexuelle » dans les écoles, collèges et lycées du Bénin.
        </p>
        
        
        <p className="text-gray-700">
          Dans le but de renforcer son personnel et de permettre aux jeunes d’être bénéficiaires de nos services, l’APESSA lance un appel à recrutement de deux stagiaires en gestion de projets.
        </p>

        <p className="text-lg text-red-700 leading-relaxed">I- PROFIL DU STAGIAIRES EN GESTION DE PROJET</p>
        <p className="text-lg text-red-700 leading-relaxed">Le stagiaire en Gestion de projet doit avoir</p>

        <p>•	en communication</p>
        <p>Parler, écrire et lire couramment l’anglais et une autre langue étrangère.</p>

          <p>Une lettre de motivation adressée à la Présidente de l’APESSA ;</p>
          <p>2.	Une copie du CV signé et daté ;</p>
          <p>3.	Copie du diplôme équivalent au poste ;</p>
          <p>4.	Deux (Copies) d’attestation de bonne fin d’exécution ;</p>
          <p>5.	Une proposition du casier judiciaire.</p>
          <p></p>6.	Copie de la carte CIP/Photo d’identité ;
          <p>AUTRES</p>
          <p>2.	Titre: Stagiaire en Gestion de projet</p>
          <p>3.	Type de contrat: Contrat de benevolat</p>
          <p>4.	 Durée du contrat: Six (06) mois renouvelable</p>
          <p>5.	Prise de fonction: Immédiate</p>
          <p>6.	Lieu de prestation: Calavi saint loius</p>

          <i>Seuls (es) les candidats (es) présélectionnés (es) seront contactés (es) par mail ou par téléphone pour la suite de la sélection.</i>

          <p>Les personnes intéressées par la présente offre doivent envoyer leurs candidatures au Secrétariat de l’APESSA situé à Abomey Calavi, Quartier St Louis, Maison HOUESSOU Réné, Tél +229 61 87 23 32 au plus tard le 22 Décembre 2023 à 16h00.</p>

          <p>Toute demande de clarification doit être envoyée par écrit ou par email aux adresses suivantes :  rhjunior@apessa.net en mettant en copie les adresses mails, cse@apessa.net,  secretariat@apessa.net, rbaparakou@apessa.net</p>



      </div>   
    ),
  },

      "blog-4": {
    title: "Avis de recrutement de deux stagiaires comptables",
    imageUrl: "/blog4.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-red-700 leading-relaxed">
          L’Association Pour l’Education, la Sexualité et la Santé en Afrique (APESSA), est une association à but non lucratif qui met en œuvre les concepts de « l’Education à la Santé Sexuelle » dans les écoles, collèges et lycées du Bénin.
        </p>
        
        
        <p className="text-gray-700">
          Dans le but de renforcer son personnel et de permettre aux jeunes d’être bénéficiaires de nos services, l’APESSA lance un appel à recrutement de deux stagiaires en comptabilité.
        </p>

        <p className="text-lg text-red-700 leading-relaxed">I- PROFIL DES STAGIAIRE COMPTABLE</p>

        <p>Le stagiaire comptable doit avoir :</p>

        <p className="text-lg text-red-700 leading-relaxed">– Niveau Licence ;</p>

                    
            <p>1.	Une lettre de motivation adressée à la Présidente de l’APESSA ;</p>
            <p>2.	Une copie du CV signé et daté ;</p>
            <p>3.	Copie du diplôme équivalent au poste ;</p>
            <p>4.	Deux (Copies) d’attestation de bonne fin d’exécution ;</p>
             <p>5.	Une proposition du casier judiciaire.</p>
             <p>6.	Copie de la carte CIP/Photo d’identité ;</p>
           	 <p>AUTRES</p>
             <p>2.	Titre : Stagiaire comptable</p>
             <p>3.	Type de contrat : Contrat de benevolat</p>
             <p>4.	 Durée du contrat : Six (06) mois renouvelable</p>
             <p>5.	Prise de fonction: Immediate</p>
           <p> 6.	Lieu de prestation: Calavi saint louis </p>

           <i>Seuls (es) les candidats (es) présélectionnés (es) seront contactés (es) par mail ou par téléphone pour la suite de la sélection.</i>

           <p>Les personnes intéressées par la présente offre doivent envoyer leurs candidatures au Secrétariat de l’APESSA situé à Abomey Calavi, Quartier St Louis, Maison HOUESSOU Réné, Tél +229 61 87 23 32 au plus tard le 22 décembre 2023 à 16h00.</p>

           <p>Toute demande de clarification doit être envoyée par écrit ou par email aux adresses suivantes : rhjunior@apessa.net en mettant en copie les adresses mails, cse@apessa.net,  secretariat@apessa.net,  rbaparakou@apessa.net</p>

      </div>   
    ),
  },

      "blog-5": {
    title: "AVIS DE RECRUTEMENT D’UN STATISTICIEN",
    imageUrl: "/blog5.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-red-700 leading-relaxed">
          L’Association Pour l’Education, la Sexualité et la Santé en Afrique (APESSA), avec l’appui technique et financier du Fonds des Nations Unies pour la Population (UNFPA) met en œuvre les concepts de « l’Education à la Santé Sexuelle » dans les écoles, collèges et lycées du Bénin en formant les enseignants de la maternelle et du primaire.
        </p>

        <p className="text-gray-700">
          Dans le but de collecter les données statistiques issues de la formation des enseignants que l’APESSA, de les dépouiller, traiter et analyser, lance un appel à recrutement d’un statisticien, spécialiste de traitement des données pour conduire la démarche de dépouillement, d’analyse, et de l’interprétation des données.
        </p>

        <p className="text-lg text-red-700 leading-relaxed">
          I-PROFIL DU CONSULTANT STATISTICIEN
        </p>

        <p>Le consultant doit:</p>

        <p>•	Être un Ingénieur des Travaux Statistique (ITS/DTS) ou Ingénieur Statisticien ou avoir un diplôme équivalent avec des compétences en travaux statistiques;</p>

        <p>Avoir une expérience professionnelle pertinente post-universitaire d’au moins trois (03) ans dans le domaine de la réalisation des travaux statistiques;</p>

        <p>•	Avoir une bonne maîtrise des outils de traitement des données d’enquêtes (Excel, STATA, etc.);</p>
        <p>•	Avoir conduit au moins deux (02) missions de traitement des données statistiques.</p>

        <p className="text-lg text-red-700 leading-relaxed">
          II-DOSSIER DE CANDIDATURE
        </p>

        <p>1- Une lettre de motivation adressée à la Présidente de l’APESSA ;</p>
        <p>2- Une copie du CV signé et daté ;</p>
        <p>3- Copie du diplôme d’ingénieur des Travaux Statistiques (ITS/ DTS), d’ingénieur Statisticien ou diplôme équivalent avec des compétences en travaux statistiques ;</p>
        <p>4- Deux (Copies) d’attestation de bonne fin d’exécution ;</p>
        <p>5- Une proposition technique (méthodologie et calendrier de travail etc.) ;</p>
        <p>6- Une proposition financière ;</p>
        <p>7- Copie de l’IFU (facultatif).</p>

        <p className="text-lg text-red-700 leading-relaxed">
          III-SOUMISSION DES OFFRES
        </p>

        <p>1- Proposition d’offre Technique</p>

        <p>Les offres techniques établies en langue française sont en trois (03) exemplaires dont un (01) original et deux (02) copies, marqués comme tels.</p>

          <p>L’offre technique présentera :</p>

          <p>•	La lettre de motivation justifiant les atouts dont dispose le postulant et son engagement à conduire avec sérénité la mission de traitement des données ;</p>
          <p>•	Une méthodologie claire permettant de conduire dans une bonne démarche la mission notamment le traitement des données et la production des différents rapports analytiques ;</p>
          <p>•	Des observations sur les rubriques des TDRS afin de mieux expliquer la méthodologie à adopter si nécessaire et les compléments d’information qui faciliteraient ladite mission.</p>

          <p>2- Proposition d’offre financière</p>

          <p>Les offres financières établies en langue française sont en trois (03) exemplaires dont un (01) original et deux (02) copies, marqués comme tels.</p>

          <p>L’offre financière présentera un budget détaillé de la mission. Cette mission est réalisée sur dix-sept (17) jours à partir de la date de signature du contrat.</p>

          <p>Les personnes intéressées par la présente offre doivent envoyer leurs offres (technique et financière) au Secrétariat de l’APESSA situé à Abomey Calavi, Quartier St Louis, Maison HOUESSOU Réné, Tél +229 61 87 23 32 au plus tard le 12 Octobre 2023 à 16h00.</p>

          <p>Toute demande de clarification doit être envoyée par écrit ou par email aux adresses suivantes : ese@apessa.net en copie rhjunior@apessa.net. Toutefois, tous les soumissionnaires auront le TDR relatif à la présente candidature.</p>



      </div>   
    ),
  },

      "blog-6": {
    title: "Avis d’appel à manifestation d’intérêt",
    imageUrl: "/blog2.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          L’Association Pour l’Education, la Sexualité et la Santé en Afrique (APESSA) est une organisation française de solidarité internationale domiciliée en France métropolitaine.  Elle a pour mission de développer en milieu scolaire ou non des services complets d’éducation sexuelle qui s’inscrivent dans un projet global d’éducation et de promotion de la santé des enfants, adolescent(s) et jeunes adultes. APESSA jouit d’une excellente réputation pour son sérieux et son professionnalisme, et combat activement toute fraude, corruption, discrimination, exploitation, malversation, harcèlement sexuel et toutes autres conduites inconvenantes.
        </p>
        
        
        <p className="text-gray-700">
          Dans le cadre du renouvellement de son répertoire des prestataires, fournisseurs et entrepreneurs, l’APESSA lance le présent avis d’appel à manifestation d’intérêt, pour la pré-qualification de personnes morales (entreprise, société, établissement, cabinet) dans divers domaines clés de ses opérations.
        </p>

        <p className="text-gray-700">
         Les prestataires, fournisseurs et entrepreneurs à sélectionner doivent être régulièrement constitués et justifier des qualifications et expériences pertinentes ou d’un savoir-faire établi dans leur domaine d’activité ou d’expertise.
        </p>

        <p>
          La liste des domaines de prestation concernés sont détaillés dans le tableau ci-dessous.
        </p>

        <p>
          DOMAINES DE COMPETENCES CONCERNES
        </p>

         <DomainesTable />

         <p>Le dossier à constituer par chaque soumissionnaire doit être composé des éléments suivants :</p>

               <p>•	Une lettre  de manifestation  d’intérêt adressée à la Présidente de l’APESSA indiquant obligatoirement le  ou  les  domaines  concernés (maximum 02) d’intervention  choisi(s). La lettre précisera de façon exhaustive les activités du soumissionnaire. Elle doit être datée, signée et cachetée ; </p>
               <p>•	Une présentation détaillée du soumissionnaire indiquant clairement ses compétences dans le(s) domaines(s) choisi(s) ainsi que les ressources humaines, matérielles dont il dispose pour la réalisation des travaux ; </p>
               <p>•	Une copie du registre de commerce ; </p>
               <p>•	Une copie des statuts de l’entreprise (SARL et SA), avec en surlignage, le domaine d’activité en rapport avec le marché concerné. Les domaines d’activités désignés comme « Diverses prestations » ne seront pas considérées ; </p>
               <p>•	Pour les anciennes entreprises, les preuves de l’exécution d’au moins trois (03) marchés similaires au cours des cinq (05) dernières années (attestations de bonne fin d’exécution accompagnées des pages de garde et de signature de chaque marché ou une copie du bon de commande pour chaque attestation) ; </p>
               <p>•	Pour les entreprises naissantes et celles qui n’ont pas encore trois (03) années d’existence, les preuves des expériences de leur personnel d’encadrement (attestations de travail, certificats, attestations de bonne fin d’exécution) ; </p>
               <p>•	Une copie de l’Identifiant Fiscal Unique (IFU).</p>

               <p>Les entreprises qualifiées dans ces domaines de prestation désireuses de collaborer avec l’APESSA sont invitées à manifester leur intérêt en envoyant leurs dossiers par mail à l’adresse suivante : secretariat@apessa.net au plus tard le 15 juin 2023 à 17H GMT. </p>


               <p>Chaque fichier-dossier de manifestation d’intérêt doit être nommé comme suit : « MANIFESTATION D’INTERET-APESSA_… (préciser les codes des domaines choisis) Exemple : « MANIFESTATION D’INTERET-APESSA_12 »</p>

               <p>Les candidats sont priés de préciser en objet du mail transmettant leurs dossiers « MANIFESTATION D’INTERET-APESSA_2023 ».</p>

               <p>Il est possible de manifester d’intérêt pour plusieurs domaines.</p>

               <p>Chaque candidat doit soumettre son dossier de manifestation d’intérêt en un seul fichier PDF. Toutes fois les soumissionnaires qui désirent déposer physiquement leurs dossiers peuvent passer au secrétariat de l’APESSA.</p>

               <p>Les prestataires et fournisseurs autrefois préqualifiés par l’APESSA et ayant exécutés ou non de(s) marché(s) ainsi que ceux dont les contrats sont en cours et qui désirent poursuivre la collaboration avec APESSA, sont également invités à soumettre leurs dossiers suivant les mêmes instructions. Il en est de même pour les personnes morales ayant sollicités un agrément au cours des douze (12) derniers mois.</p>

                <p>Pour tout renseignement complémentaire, veuillez écrire à secretariat@apessa.net ou appeler le (229) 01 61 87 23 32.</p>
      </div>   
    ),
  },
  // Add more blog posts...
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogDetails[slug as keyof typeof blogDetails];

  if (!blog) {
    return (
      <article className="max-w-5xl mx-auto p-6 mt-20">
        <h1 className="text-2xl font-bold text-red-600">Blog not found</h1>
        <p className="mt-4 text-gray-700">
          The blog post you are looking for does not exist.
        </p>
      </article>
    );
  }

  return (
     <div className="w-full bg-red-50">
    <div className="bg-red-50">
      <article className="max-w-6xl mx-auto p-6 mt-20 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 uppercase text-red-600">{blog.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
          
          </div>
          <div className="prose prose-lg max-w-none">
            {blog.content}
          </div>
        </div>
      </article>
      {/* 
      <div className="max-w-[70vw] mx-auto p-6">
        <h2>Potential Component</h2>
        <p>This could be a component that appears on all blogs, such as a call-to-action or a newsletter signup form.</p>
      </div>
      */}
    </div>
    </div>
  );
}