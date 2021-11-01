import { Consent } from 'src/consent/entity/consent.entity'
import { BaseEntity, Column, PrimaryColumn, Entity, OneToMany } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryColumn({
        type: 'uuid',
      })
    id: string

    @Column({ type: "varchar" })
    email: string

    // @Column({ type: 'json', nullable: true })
    // consents: []

    @OneToMany(type => Consent, consent => consent.user, { eager: true })
    consent: Consent[]
}