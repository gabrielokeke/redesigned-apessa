// app/resources/[slug]/page.tsx
import Link from "next/link";
interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const resourceDetails = {
  "resource-1": {
    title: "Le RBA Parakou recrute de nouveaux membres",
    imageUrl: "/resource1.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Tu es jeune résidant ou étudiant à Parakou et tu désires participer à des actions de développement
          durable dans le secteur de la santé et des droits humains au profit de ta communauté.
          Tu tiens à impacter positivement ta génération, relever de grands défis et vivre une expérience inouïe du
          travail en équipe. Cette opportunité t’es adressée. 𝐋𝐞 𝐑é𝐬𝐞𝐚𝐮 des 𝐁é𝐧é𝐯𝐨𝐥𝐞𝐬 𝐀𝐏𝐄𝐒𝐒𝐀 (𝐑𝐁𝐀) 𝐭’𝐨𝐮𝐯𝐫𝐞 𝐬𝐞𝐬
          𝐩𝐨𝐫𝐭𝐞𝐬. Rejoins nous dès à présent pour une expérience associative pleine d’engouement en
          remplissant ce formulaire jusqu’au 23 juillet 2021.
        </p>
        
        <button className="text-yellow-500 py-2 px-4 font-medium rounded-3xl bg-red-700" type="button">
          <Link href="http://bit.ly/rbaparakou">
            <span>Demande d'adhésion au RBA</span>
          </Link>
        </button>
      </div>
    ),
  },
  "resource-2": {
    title: "Conférence débat sur le thème Jeunesse, Emploi et Développement",
    imageUrl: "/resource2.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
        Dans le cadre de la campagne <span className="text-red-700">« Exprime toi »</span>, le Réseau des Bénévoles de l’APESSA Bénin, #RBA
        organise en collaboration avec l’ambassade du royaume des Pays-Bas, une conférence débat sur le
        thème : Jeunesse, Emploi et Développement
        ? Vendredi 19 septembre 2019 à partir de 16h00.
        ?Retransmission en direct sur la page facebook <span className="text-red-700">@APESSABENIN</span>?
        Soyez connecté et n’hésitez pas à intervenir !
             <span className="text-red-700">#TogetherWeSpeak</span>        
        </p>
      
      </div>
    ),
  },

  "resource-4": {
    title: "Appel à candidature pour le recrutement de 10 volontaires-bénévoles",
    imageUrl: "/resource4.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Le Réseau des Bénévoles de l’APESSA, section de Abomey-Calavi, lance un appel à candidature de 10
          volontaires-bénévoles élèves et étudiants (es).
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Tu as envie de vivre une expérience de leadership et de participer à des initiatives à fort impact sur
          l’éducation et la santé des jeunes de ta communauté ?
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Tu as la vocation et la volonté d’un ou plusieurs des points ci-après :
        </p>
        
        <div>
          <div className="grid gap-2.5 text-gray-700">
            <li> Créer un environnement d’accompagnement de suivi, d’écoute, d’information et d’orientation de la jeunesse ;</li>
            <li> Accompagner tes pairs sur le plan scolaire, universitaire et communautaire ;</li>
            <li> Écouter les questionnements des jeunes pour privilégier et favoriser la mobilisation d’un espace de réflexion personnelle et de parole autour de la sexualité et des pratiques sexuelles;</li>
            <li> Sensibiliser contre les grossesses précoces en milieu scolaire, universitaire et communautaire;</li>
            <li> Intensifier l’échange des informations sur les IST/VIH/SIDA en milieux d’interventions ;</li>
            <li> Développer et renforcer la capacité des élèves pour contribuer aux initiatives de lutte contre les IST/VIH/SIDA ;</li>
            <li> Promouvoir l’entreprenariat en organisant des formations d’Activités Génératrices de Revenus;</li>
            <li> Sensibiliser les parents au bien-fondé d’une éducation sexuelle.</li>
          </div>
        </div>

        <h1 className="text-red-700 text-xl font-bold">Ta candidature à ce recrutement nous intéresse !</h1>
        
        <p className="text-gray-700">
              L’APESSA en effet est une association d’intérêt général, laïque et apolitique déclarée à but non lucratif
          régie par la loi 1901 et qui a été créée le 26 mars 2013 à Paris. Elle a pour vocation de couvrir une
          grande partie de l’Afrique et pour se faire, elle a choisi comme point de départ de ses activités le Bénin où
          une antenne <span className="text-red-700 font-bold">' APESSA BENIN '</span>  a été créée en aout 2013.
        </p>

        <p className="text-gray-700">
          Le Réseau des Bénévoles de Abomey-Calavi, sous-structure de l’APESSA créé en 2019 mène des
          activités dans le Sud du Bénin depuis sa création. Le réseau depuis lors est constitué d’une équipe de
          jeunes étudiants de l’Université deAbomey-Calavi dynamiques et outillés. Dans le souci de permettre à
          leurs pairs de se rendre utiles et d’acquérir davantage d’expériences, il lance un appel à candidature à
          toute personne désireuse de joindre la communauté.
        </p>

        <h1 className="text-red-700 text-xl font-bold">Description du rôle du bénévole</h1>
        
        <p className="text-gray-700">La responsabilité du bénévole consiste à encadrer, en toute sécurité, les élèves/étudiants et toutes
        personnes confrontées aux sujets relatifs à l’éducation et à la santé sexuelle. Mais aussi, sa mission
        consistera à animer des séances d’échanges sur les thématiques de la SRAJ, de développement
        personnel, de leadership et d’Activités Génératrices de Revenus. Sous l’autorité hiérarchique des
        membres du bureau qui assure l’organisation et le suivi des activités dans les zones d’interventions de
        RBA.
        </p>

        <div>
        <h4 className="text-red-700 font-bold">Tâches</h4>

          <div className="grid gap-2.5">
          <li>Proposer et adapter des animations en lien avec la SRAJ ;</li>
          <li>Préparer, mettre en œuvre et réaliser les animations des activités en SRAJ ;</li>
          <li>S’impliquer et participer à l’élaboration, la mise en œuvre des interventions dans les milieux scolaires, universitaires et communautaires ;</li>
          <li>Respecter les réglementations, normes, directives et recommandations ;</li>
          <li>Proposer toute mesure nécessaire et utile à l’amélioration de la sécurité au fonctionnement du réseau ;</li>
          <li> Etre animé d’une recherche constante d’amélioration et d’innovation.</li>
        </div>
        </div>

        <div>
          <h4 className="text-red-700 font-bold">Profil souhaité</h4>

          <div>
            <li>Être prêt à travailler sous pression et sans rémunération ;</li>
            <li>Etre étudiant ou élève dans l’une des Universités/écoles publiques ou privées de Abomey-Calavi ou Cotonou ;</li>
            <li>Être âgé de 24 ans au maximum ;</li>
            <li>Avoir un moyen de déplacement serait un atout.</li>
          </div>
        </div>

        <button className="text-yellow-500 py-2 px-4 font-medium rounded-3xl bg-red-700" type="button">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfq0XGu2Uw9psOBbiRp1Tg4CWSujaX5jHH1U-17Qxt6MaqCBQ/viewform?usp=sf_link">
            <span>Cliquez ici pour postuler</span>
          </Link>
        </button>

        
      </div>
    ),
  },
  "resource-5": {
    title: "Appel à candidature pour le recrutement de 10 volontaires-bénévoles étudiants (es)",
    imageUrl: "/resource5.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Le Réseau des Bénévoles de l’APESSA, section de Parakou, lance un appel à candidature de 10
          volontaires-bénévoles étudiants (es).
        </p>
      
        <p className="text-gray-700 text-lg">
            Tu as envie de vivre une expérience de leadership et de participer à des initiatives à fort impact sur
            l’éducation et la santé des jeunes de ta communauté ?
        </p>

        <p className="text-gray-700 text-lg">Tu as la vocation et la volonté d’un ou plusieurs des points ci-après :</p>
        
        <div className="text-gray-700 gap-2.5 grid text-lg">
        <li>Créer un environnement d’accompagnement de suivi, d’écoute, d’information et d’orientation
        de la jeunesse ;
        </li>
        <li>Accompagner tes pairs sur le plan scolaire, universitaire et communautaire ;</li>
        <li>Écouter les questionnements des jeunes pour privilégier et favoriser la mobilisation d’un
        espace de réflexion personnelle et de parole autour de la sexualité et des pratiques sexuelles;
        </li>
        <li> Sensibiliser contre les grossesses précoces en milieu scolaire, universitaire et communautaire;</li>
        <li>Intensifier l’échange des informations sur les IST/VIH/SIDA en milieux d’interventions ;</li>
        <li>Développer et renforcer la capacité des élèves pour contribuer aux initiatives de lutte contre
        les IST/VIH/SIDA ;</li>
        <li>Promouvoir l’entreprenariat en organisant des formations d’Activités Génératrices de Revenus;</li>
        <li>Sensibiliser les parents au bien-fondé d’une éducation sexuelle.</li>
        </div>

        <h1 className="text-xl font-bold text-red-700">Ta candidature à ce recrutement nous intéresse !</h1>
        
        <p className="text-gray-700 text-lg">
          L’APESSA en effet est une association d’intérêt général, laïque et apolitique déclarée à but non lucratif
          régie par la loi 1901 et qui a été créée le 26 mars 2013 à Paris. Elle a pour vocation de couvrir une
          grande partie de l’Afrique et pour se faire, elle a choisi comme point de départ de ses activités le Bénin où
          une antenne <span className="text-red-700 font-bold">" APESSA BENIN " </span> a été créée en aout 2013.
        </p>

        <p className="text-gray-700 text-lg">
            Le Réseau des Bénévoles de Parakou, sous-structure de l’APESSA créé en 2016 mène des activités au
            sein de la communauté du septentrion depuis sa création. Le réseau depuis lors est constitué d’une
            équipe de jeunes étudiants de l’Université de Parakou dynamiques et outillés. Dans le souci de permettre
            à leurs pairs de se rendre utiles et d’acquérir d’expériences, il lance un appel à candidature à toute
            personne désireuse de joindre la communauté.
        </p>

        <h1 className="text-xl font-bold text-red-700">Description du rôle du bénévole</h1>

        <p className="text-gray-700 text-lg">
          La responsabilité du bénévole consiste à encadrer, en toute sécurité, les élèves/étudiants et toutes
          personnes confrontées aux sujets relatifs à l’éducation et à la santé sexuelle. Mais aussi, sa mission
          consistera à animer des séances d’échanges sur les thématiques de la SRAJ, de développement
          personnel, de leadership et d’Activités Génératrices de Revenus. Sous l’autorité hiérarchique des
          membres du bureau qui assure l’organisation et le suivi des activités dans les zones d’interventions de
          RBA.
        </p>

        <div>
        <h1 className="text-xl font-bold text-red-700">Tâches</h1>

        <div className="text-lg text-gray-700 grid gap-2.5">
          <li>Proposer et adapter des animations en lien avec la SRAJ ;</li>
          <li>Préparer, mettre en œuvre et réaliser les animations des activités en SRAJ ;</li>
          <li>S’impliquer et participer à l’élaboration, la mise en œuvre des interventions dans les milieux
          scolaires, universitaires et communautaires ;
          </li>
          <li>Respecter les réglementations, normes, directives et recommandations ;</li>
          <li>Proposer toute mesure nécessaire et utile à l’amélioration de la sécurité au fonctionnement du réseau ;</li>
          <li>Etre animé d’une recherche constante d’amélioration et d’innovation.</li>
        </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-red-700">Profil souhaité</h1>

          <div className="text-lg text-gray-700 grid gap-2.5">
            <li>Être prêt à travailler sous pression et sans rémunération ;</li>
            <li>Être étudiant dans l’une des Universités publiques ou privées de Parakou ;</li>
            <li>Être âgé de 24 ans au maximum ;</li>
            <li>Avoir un moyen de déplacement serait un atout.</li>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-red-700">Composition du dossier de candidature</h1>
          <div className="text-lg text-gray-700 grid gap-2.5">
              <li>Une lettre de motivation adressée au Président du Réseau des Bénévoles APESSA ;</li>
              <li>Une copie du CV signé et daté ;</li>
              <li>Copie de la carte d’identité ;</li>
              <li>Deux photos d’identités.</li>
          </div>
        </div>

        <p className="text-gray-700 text-lg">
          Les dossiers sont à déposer sous plis fermé, dans la boite à suggestions du siège RBA Parakou, situé
          sur les pavés an allant au marché Rose Croix à gauche, à 100 mètres de la maison de Mr BIO BATOURE
          du 22 Juillet au 15 août 2019 à 18 heures
        </p>

        <p className="text-gray-700 text-lg">Envoyez également vos candidatures par EMAIL: <span className="text-red-700 font-bold">rbaparakou@apessa.net</span> </p>
        <p className="text-gray-700 text-lg">Appel ou WhatsApp:  <span className="text-red-700 font-bold">01 66 87 26 14</span> </p>
        <p className="text-gray-700 text-lg">Site web : <Link href='http://www.apessa.net/'><span className="text-red-700 font-bold">www.apessa.net</span></Link></p>
        <p className="text-gray-700 text-lg">Facebook: <span className="text-red-700 font-bold">APESSABENIN</span></p>
      </div>
    ),
  },

    "resource-6": {
    title: "Seize Jours d’activisme contre les violences faites aux femmes, édition 2019",
    imageUrl: "/resource6.jpg",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
        Al’occasion de la Journée internationale pour l’élimination de la violence à l’égard des femmes, le Réseau
        des Bénévoles de l’APESSA s’inscrit dans la dynamique de la quinzaine de campagne internationale
        annuelle et vous propose de mettre les médias sociaux au service du combat contre les #VFF. Ensemble,
        participons du 25 novembres aux discussions, tweetups, lives, diffusons les badges et faisons usage des
        hashtag <span className="text-red-700">#EcoutezMoiAussi</span>, <span className="text-red-700">#MESGestesComptent</span>, <span className="text-red-700"> #16joursdactivisme</span> <span className="text-red-700">#Orangerlemonde229.</span>
        </p>
                
        <p className="text-gray-700 text-lg">
          Pour ne rien rater, rejoignez la page officielle de l’évènement sur facebook à l’adresse {" "}
           <Link href='https://www.facebook.com/events/995224264144467'><span className="text-red-700">https://www.facebook.com/events/995224264144467</span></Link>
        </p>
        
        <p className="text-gray-700 text-lg">
          Prêt pour la campagne? Et si tu nous le faisait savoir en mettant ta photo aux couleurs du badge officiel!
          C’est facile. Clique sur ce bouton:        
          </p>

          <button className="text-yellow-500 py-2 px-4 font-medium rounded-3xl bg-red-700" type="button">
          <Link href="http://facebook.com/profilepicframes/?selected_overlay_id=2470122739776932">
            <span>Créer mon badge #EcoutezMoiAussi</span>
          </Link>
        </button>

      </div>

    ),
  },
};

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resourceDetails[slug as keyof typeof resourceDetails];

  if (!resource) {
    return (
      <div className="w-full bg-red-50">
      <article className="max-w-6xl mx-auto p-6 mt-20">
        <h1 className="text-2xl font-bold text-red-600">Resource not found</h1>
        <p className="mt-4 text-gray-700">
          The resource you are looking for does not exist.
        </p>
      </article>
      </div>
    );
  }

  return (
    <div className="w-full bg-red-50">
    <article className="max-w-6xl mx-auto p-6 bg-red-50">
      {/* Layout with image left, ALL content right */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-red-700">{resource.title}</h1>
          
          {/* All resource content goes here in the right column */}
          <div className="prose prose-lg max-w-none">
            {resource.content}
          </div>
        </div>
      </div>
    </article>
    </div>
  );
}