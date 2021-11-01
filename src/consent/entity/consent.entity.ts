import { User } from 'src/user/entity/user.entity'
import { BaseEntity, Column, PrimaryColumn, Entity, ManyToOne, CreateDateColumn } from 'typeorm'

@Entity('consents')
export class Consent extends BaseEntity {
    @PrimaryColumn({
        type: 'uuid',
      })
    id: string

    @ManyToOne(type => User, user => user.consent, { eager: false })
    user: User
    
    @Column({ type: "varchar" })
    consentId: string

    @Column({ type: "boolean" })
    enabled: boolean

    @Column({ type: "char" })
    status: string

    @CreateDateColumn({ type: 'timestamp' })
    createdDate: Date
}