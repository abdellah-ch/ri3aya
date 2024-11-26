import React from 'react';

const Profile = () => {
    return (
        <section className="p-6 bg-background rounded-lg shadow-md max-w-[700px] mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Profil de عبدالله</h2>
            <div className="flex items-center space-x-4">
                <img className="w-32 h-32 rounded-full" src="/images/firmiere1.jpg" alt="عبدالله" />
                <div>
                    <p className="text-xl font-bold">عبدالله ن.</p>
                    <p className="text-muted-foreground">Aide-soignant senior à El Jadida</p>
                    <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">À propos de عبدالله</h3>
                <p className="mt-2">
                    Avec plus de 10 ans d&apos;expérience en soins aux personnes âgées, عبدالله est connu pour son
                    professionnalisme et sa bienveillance. Il a travaillé avec plusieurs familles à El Jadida et est
                    spécialisé dans les soins à domicile.
                </p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Commentaires des clients</h3>
                <div className="mt-4 space-y-4">
                    <div className="p-4 bg-muted rounded-lg shadow-sm">
                        <p className="font-bold">Fatima Z.</p>
                        <p>
                            عبدالله est très attentionné et a aidé ma mère pendant 15 jours. Je recommande vivement ses services.
                        </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg shadow-sm">
                        <p className="font-bold">Mohammed L.</p>
                        <p>
                            Un excellent aide-soignant, toujours ponctuel et respectueux. Merci pour votre dévouement.
                        </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg shadow-sm">
                        <p className="font-bold">Latifa R.</p>
                        <p>
                            Très satisfait de son travail, ma famille est en confiance avec عبدالله. Merci pour tout !
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
            </div>
        </section>
    );
};

export default Profile;
