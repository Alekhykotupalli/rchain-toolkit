import * as $protobuf from "protobufjs";
/** Namespace casper. */
export namespace casper {

    /** Properties of a HasBlockRequestProto. */
    interface IHasBlockRequestProto {

        /** HasBlockRequestProto hash */
        hash?: (Uint8Array|null);
    }

    /** Represents a HasBlockRequestProto. */
    class HasBlockRequestProto implements IHasBlockRequestProto {

        /**
         * Constructs a new HasBlockRequestProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IHasBlockRequestProto);

        /** HasBlockRequestProto hash. */
        public hash: Uint8Array;

        /**
         * Creates a new HasBlockRequestProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HasBlockRequestProto instance
         */
        public static create(properties?: casper.IHasBlockRequestProto): casper.HasBlockRequestProto;

        /**
         * Encodes the specified HasBlockRequestProto message. Does not implicitly {@link casper.HasBlockRequestProto.verify|verify} messages.
         * @param message HasBlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IHasBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HasBlockRequestProto message, length delimited. Does not implicitly {@link casper.HasBlockRequestProto.verify|verify} messages.
         * @param message HasBlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IHasBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HasBlockRequestProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HasBlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.HasBlockRequestProto;

        /**
         * Decodes a HasBlockRequestProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HasBlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.HasBlockRequestProto;

        /**
         * Verifies a HasBlockRequestProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HasBlockRequestProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HasBlockRequestProto
         */
        public static fromObject(object: { [k: string]: any }): casper.HasBlockRequestProto;

        /**
         * Creates a plain object from a HasBlockRequestProto message. Also converts values to other types if specified.
         * @param message HasBlockRequestProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.HasBlockRequestProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HasBlockRequestProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HasBlockProto. */
    interface IHasBlockProto {

        /** HasBlockProto hash */
        hash?: (Uint8Array|null);
    }

    /** Represents a HasBlockProto. */
    class HasBlockProto implements IHasBlockProto {

        /**
         * Constructs a new HasBlockProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IHasBlockProto);

        /** HasBlockProto hash. */
        public hash: Uint8Array;

        /**
         * Creates a new HasBlockProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HasBlockProto instance
         */
        public static create(properties?: casper.IHasBlockProto): casper.HasBlockProto;

        /**
         * Encodes the specified HasBlockProto message. Does not implicitly {@link casper.HasBlockProto.verify|verify} messages.
         * @param message HasBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IHasBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HasBlockProto message, length delimited. Does not implicitly {@link casper.HasBlockProto.verify|verify} messages.
         * @param message HasBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IHasBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HasBlockProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HasBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.HasBlockProto;

        /**
         * Decodes a HasBlockProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HasBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.HasBlockProto;

        /**
         * Verifies a HasBlockProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HasBlockProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HasBlockProto
         */
        public static fromObject(object: { [k: string]: any }): casper.HasBlockProto;

        /**
         * Creates a plain object from a HasBlockProto message. Also converts values to other types if specified.
         * @param message HasBlockProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.HasBlockProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HasBlockProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockRequestProto. */
    interface IBlockRequestProto {

        /** BlockRequestProto hash */
        hash?: (Uint8Array|null);
    }

    /** Represents a BlockRequestProto. */
    class BlockRequestProto implements IBlockRequestProto {

        /**
         * Constructs a new BlockRequestProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockRequestProto);

        /** BlockRequestProto hash. */
        public hash: Uint8Array;

        /**
         * Creates a new BlockRequestProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockRequestProto instance
         */
        public static create(properties?: casper.IBlockRequestProto): casper.BlockRequestProto;

        /**
         * Encodes the specified BlockRequestProto message. Does not implicitly {@link casper.BlockRequestProto.verify|verify} messages.
         * @param message BlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockRequestProto message, length delimited. Does not implicitly {@link casper.BlockRequestProto.verify|verify} messages.
         * @param message BlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockRequestProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockRequestProto;

        /**
         * Decodes a BlockRequestProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockRequestProto;

        /**
         * Verifies a BlockRequestProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockRequestProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockRequestProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockRequestProto;

        /**
         * Creates a plain object from a BlockRequestProto message. Also converts values to other types if specified.
         * @param message BlockRequestProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockRequestProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockRequestProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForkChoiceTipRequestProto. */
    interface IForkChoiceTipRequestProto {
    }

    /** Represents a ForkChoiceTipRequestProto. */
    class ForkChoiceTipRequestProto implements IForkChoiceTipRequestProto {

        /**
         * Constructs a new ForkChoiceTipRequestProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IForkChoiceTipRequestProto);

        /**
         * Creates a new ForkChoiceTipRequestProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForkChoiceTipRequestProto instance
         */
        public static create(properties?: casper.IForkChoiceTipRequestProto): casper.ForkChoiceTipRequestProto;

        /**
         * Encodes the specified ForkChoiceTipRequestProto message. Does not implicitly {@link casper.ForkChoiceTipRequestProto.verify|verify} messages.
         * @param message ForkChoiceTipRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IForkChoiceTipRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForkChoiceTipRequestProto message, length delimited. Does not implicitly {@link casper.ForkChoiceTipRequestProto.verify|verify} messages.
         * @param message ForkChoiceTipRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IForkChoiceTipRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForkChoiceTipRequestProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForkChoiceTipRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ForkChoiceTipRequestProto;

        /**
         * Decodes a ForkChoiceTipRequestProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForkChoiceTipRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ForkChoiceTipRequestProto;

        /**
         * Verifies a ForkChoiceTipRequestProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForkChoiceTipRequestProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForkChoiceTipRequestProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ForkChoiceTipRequestProto;

        /**
         * Creates a plain object from a ForkChoiceTipRequestProto message. Also converts values to other types if specified.
         * @param message ForkChoiceTipRequestProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ForkChoiceTipRequestProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForkChoiceTipRequestProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApprovedBlockCandidateProto. */
    interface IApprovedBlockCandidateProto {

        /** ApprovedBlockCandidateProto block */
        block?: (casper.IBlockMessageProto|null);

        /** ApprovedBlockCandidateProto requiredSigs */
        requiredSigs?: (number|null);
    }

    /** Represents an ApprovedBlockCandidateProto. */
    class ApprovedBlockCandidateProto implements IApprovedBlockCandidateProto {

        /**
         * Constructs a new ApprovedBlockCandidateProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IApprovedBlockCandidateProto);

        /** ApprovedBlockCandidateProto block. */
        public block?: (casper.IBlockMessageProto|null);

        /** ApprovedBlockCandidateProto requiredSigs. */
        public requiredSigs: number;

        /**
         * Creates a new ApprovedBlockCandidateProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApprovedBlockCandidateProto instance
         */
        public static create(properties?: casper.IApprovedBlockCandidateProto): casper.ApprovedBlockCandidateProto;

        /**
         * Encodes the specified ApprovedBlockCandidateProto message. Does not implicitly {@link casper.ApprovedBlockCandidateProto.verify|verify} messages.
         * @param message ApprovedBlockCandidateProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IApprovedBlockCandidateProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApprovedBlockCandidateProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockCandidateProto.verify|verify} messages.
         * @param message ApprovedBlockCandidateProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IApprovedBlockCandidateProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApprovedBlockCandidateProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApprovedBlockCandidateProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ApprovedBlockCandidateProto;

        /**
         * Decodes an ApprovedBlockCandidateProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApprovedBlockCandidateProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ApprovedBlockCandidateProto;

        /**
         * Verifies an ApprovedBlockCandidateProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApprovedBlockCandidateProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApprovedBlockCandidateProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ApprovedBlockCandidateProto;

        /**
         * Creates a plain object from an ApprovedBlockCandidateProto message. Also converts values to other types if specified.
         * @param message ApprovedBlockCandidateProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ApprovedBlockCandidateProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApprovedBlockCandidateProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnapprovedBlockProto. */
    interface IUnapprovedBlockProto {

        /** UnapprovedBlockProto candidate */
        candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** UnapprovedBlockProto timestamp */
        timestamp?: (number|Long|null);

        /** UnapprovedBlockProto duration */
        duration?: (number|Long|null);
    }

    /** Represents an UnapprovedBlockProto. */
    class UnapprovedBlockProto implements IUnapprovedBlockProto {

        /**
         * Constructs a new UnapprovedBlockProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IUnapprovedBlockProto);

        /** UnapprovedBlockProto candidate. */
        public candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** UnapprovedBlockProto timestamp. */
        public timestamp: (number|Long);

        /** UnapprovedBlockProto duration. */
        public duration: (number|Long);

        /**
         * Creates a new UnapprovedBlockProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnapprovedBlockProto instance
         */
        public static create(properties?: casper.IUnapprovedBlockProto): casper.UnapprovedBlockProto;

        /**
         * Encodes the specified UnapprovedBlockProto message. Does not implicitly {@link casper.UnapprovedBlockProto.verify|verify} messages.
         * @param message UnapprovedBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IUnapprovedBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnapprovedBlockProto message, length delimited. Does not implicitly {@link casper.UnapprovedBlockProto.verify|verify} messages.
         * @param message UnapprovedBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IUnapprovedBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnapprovedBlockProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnapprovedBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.UnapprovedBlockProto;

        /**
         * Decodes an UnapprovedBlockProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnapprovedBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.UnapprovedBlockProto;

        /**
         * Verifies an UnapprovedBlockProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnapprovedBlockProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnapprovedBlockProto
         */
        public static fromObject(object: { [k: string]: any }): casper.UnapprovedBlockProto;

        /**
         * Creates a plain object from an UnapprovedBlockProto message. Also converts values to other types if specified.
         * @param message UnapprovedBlockProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.UnapprovedBlockProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnapprovedBlockProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Signature. */
    interface ISignature {

        /** Signature publicKey */
        publicKey?: (Uint8Array|null);

        /** Signature algorithm */
        algorithm?: (string|null);

        /** Signature sig */
        sig?: (Uint8Array|null);
    }

    /** Represents a Signature. */
    class Signature implements ISignature {

        /**
         * Constructs a new Signature.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.ISignature);

        /** Signature publicKey. */
        public publicKey: Uint8Array;

        /** Signature algorithm. */
        public algorithm: string;

        /** Signature sig. */
        public sig: Uint8Array;

        /**
         * Creates a new Signature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signature instance
         */
        public static create(properties?: casper.ISignature): casper.Signature;

        /**
         * Encodes the specified Signature message. Does not implicitly {@link casper.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link casper.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.Signature;

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.Signature;

        /**
         * Verifies a Signature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signature
         */
        public static fromObject(object: { [k: string]: any }): casper.Signature;

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @param message Signature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockApprovalProto. */
    interface IBlockApprovalProto {

        /** BlockApprovalProto candidate */
        candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** BlockApprovalProto sig */
        sig?: (casper.ISignature|null);
    }

    /** Represents a BlockApprovalProto. */
    class BlockApprovalProto implements IBlockApprovalProto {

        /**
         * Constructs a new BlockApprovalProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockApprovalProto);

        /** BlockApprovalProto candidate. */
        public candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** BlockApprovalProto sig. */
        public sig?: (casper.ISignature|null);

        /**
         * Creates a new BlockApprovalProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockApprovalProto instance
         */
        public static create(properties?: casper.IBlockApprovalProto): casper.BlockApprovalProto;

        /**
         * Encodes the specified BlockApprovalProto message. Does not implicitly {@link casper.BlockApprovalProto.verify|verify} messages.
         * @param message BlockApprovalProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockApprovalProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockApprovalProto message, length delimited. Does not implicitly {@link casper.BlockApprovalProto.verify|verify} messages.
         * @param message BlockApprovalProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockApprovalProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockApprovalProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockApprovalProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockApprovalProto;

        /**
         * Decodes a BlockApprovalProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockApprovalProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockApprovalProto;

        /**
         * Verifies a BlockApprovalProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockApprovalProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockApprovalProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockApprovalProto;

        /**
         * Creates a plain object from a BlockApprovalProto message. Also converts values to other types if specified.
         * @param message BlockApprovalProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockApprovalProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockApprovalProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApprovedBlockProto. */
    interface IApprovedBlockProto {

        /** ApprovedBlockProto candidate */
        candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** ApprovedBlockProto sigs */
        sigs?: (casper.ISignature[]|null);
    }

    /** Represents an ApprovedBlockProto. */
    class ApprovedBlockProto implements IApprovedBlockProto {

        /**
         * Constructs a new ApprovedBlockProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IApprovedBlockProto);

        /** ApprovedBlockProto candidate. */
        public candidate?: (casper.IApprovedBlockCandidateProto|null);

        /** ApprovedBlockProto sigs. */
        public sigs: casper.ISignature[];

        /**
         * Creates a new ApprovedBlockProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApprovedBlockProto instance
         */
        public static create(properties?: casper.IApprovedBlockProto): casper.ApprovedBlockProto;

        /**
         * Encodes the specified ApprovedBlockProto message. Does not implicitly {@link casper.ApprovedBlockProto.verify|verify} messages.
         * @param message ApprovedBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IApprovedBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApprovedBlockProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockProto.verify|verify} messages.
         * @param message ApprovedBlockProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IApprovedBlockProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApprovedBlockProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApprovedBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ApprovedBlockProto;

        /**
         * Decodes an ApprovedBlockProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApprovedBlockProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ApprovedBlockProto;

        /**
         * Verifies an ApprovedBlockProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApprovedBlockProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApprovedBlockProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ApprovedBlockProto;

        /**
         * Creates a plain object from an ApprovedBlockProto message. Also converts values to other types if specified.
         * @param message ApprovedBlockProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ApprovedBlockProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApprovedBlockProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApprovedBlockRequestProto. */
    interface IApprovedBlockRequestProto {

        /** ApprovedBlockRequestProto identifier */
        identifier?: (string|null);
    }

    /** Represents an ApprovedBlockRequestProto. */
    class ApprovedBlockRequestProto implements IApprovedBlockRequestProto {

        /**
         * Constructs a new ApprovedBlockRequestProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IApprovedBlockRequestProto);

        /** ApprovedBlockRequestProto identifier. */
        public identifier: string;

        /**
         * Creates a new ApprovedBlockRequestProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApprovedBlockRequestProto instance
         */
        public static create(properties?: casper.IApprovedBlockRequestProto): casper.ApprovedBlockRequestProto;

        /**
         * Encodes the specified ApprovedBlockRequestProto message. Does not implicitly {@link casper.ApprovedBlockRequestProto.verify|verify} messages.
         * @param message ApprovedBlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IApprovedBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApprovedBlockRequestProto message, length delimited. Does not implicitly {@link casper.ApprovedBlockRequestProto.verify|verify} messages.
         * @param message ApprovedBlockRequestProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IApprovedBlockRequestProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApprovedBlockRequestProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApprovedBlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ApprovedBlockRequestProto;

        /**
         * Decodes an ApprovedBlockRequestProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApprovedBlockRequestProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ApprovedBlockRequestProto;

        /**
         * Verifies an ApprovedBlockRequestProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApprovedBlockRequestProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApprovedBlockRequestProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ApprovedBlockRequestProto;

        /**
         * Creates a plain object from an ApprovedBlockRequestProto message. Also converts values to other types if specified.
         * @param message ApprovedBlockRequestProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ApprovedBlockRequestProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApprovedBlockRequestProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoApprovedBlockAvailableProto. */
    interface INoApprovedBlockAvailableProto {

        /** NoApprovedBlockAvailableProto identifier */
        identifier?: (string|null);

        /** NoApprovedBlockAvailableProto nodeIdentifer */
        nodeIdentifer?: (string|null);
    }

    /** Represents a NoApprovedBlockAvailableProto. */
    class NoApprovedBlockAvailableProto implements INoApprovedBlockAvailableProto {

        /**
         * Constructs a new NoApprovedBlockAvailableProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.INoApprovedBlockAvailableProto);

        /** NoApprovedBlockAvailableProto identifier. */
        public identifier: string;

        /** NoApprovedBlockAvailableProto nodeIdentifer. */
        public nodeIdentifer: string;

        /**
         * Creates a new NoApprovedBlockAvailableProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoApprovedBlockAvailableProto instance
         */
        public static create(properties?: casper.INoApprovedBlockAvailableProto): casper.NoApprovedBlockAvailableProto;

        /**
         * Encodes the specified NoApprovedBlockAvailableProto message. Does not implicitly {@link casper.NoApprovedBlockAvailableProto.verify|verify} messages.
         * @param message NoApprovedBlockAvailableProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.INoApprovedBlockAvailableProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoApprovedBlockAvailableProto message, length delimited. Does not implicitly {@link casper.NoApprovedBlockAvailableProto.verify|verify} messages.
         * @param message NoApprovedBlockAvailableProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.INoApprovedBlockAvailableProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoApprovedBlockAvailableProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoApprovedBlockAvailableProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.NoApprovedBlockAvailableProto;

        /**
         * Decodes a NoApprovedBlockAvailableProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoApprovedBlockAvailableProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.NoApprovedBlockAvailableProto;

        /**
         * Verifies a NoApprovedBlockAvailableProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoApprovedBlockAvailableProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoApprovedBlockAvailableProto
         */
        public static fromObject(object: { [k: string]: any }): casper.NoApprovedBlockAvailableProto;

        /**
         * Creates a plain object from a NoApprovedBlockAvailableProto message. Also converts values to other types if specified.
         * @param message NoApprovedBlockAvailableProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.NoApprovedBlockAvailableProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoApprovedBlockAvailableProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockMessageProto. */
    interface IBlockMessageProto {

        /** BlockMessageProto blockHash */
        blockHash?: (Uint8Array|null);

        /** BlockMessageProto header */
        header?: (casper.IHeaderProto|null);

        /** BlockMessageProto body */
        body?: (casper.IBodyProto|null);

        /** BlockMessageProto justifications */
        justifications?: (casper.IJustificationProto[]|null);

        /** BlockMessageProto sender */
        sender?: (Uint8Array|null);

        /** BlockMessageProto seqNum */
        seqNum?: (number|null);

        /** BlockMessageProto sig */
        sig?: (Uint8Array|null);

        /** BlockMessageProto sigAlgorithm */
        sigAlgorithm?: (string|null);

        /** BlockMessageProto shardId */
        shardId?: (string|null);

        /** BlockMessageProto extraBytes */
        extraBytes?: (Uint8Array|null);
    }

    /** Represents a BlockMessageProto. */
    class BlockMessageProto implements IBlockMessageProto {

        /**
         * Constructs a new BlockMessageProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockMessageProto);

        /** BlockMessageProto blockHash. */
        public blockHash: Uint8Array;

        /** BlockMessageProto header. */
        public header?: (casper.IHeaderProto|null);

        /** BlockMessageProto body. */
        public body?: (casper.IBodyProto|null);

        /** BlockMessageProto justifications. */
        public justifications: casper.IJustificationProto[];

        /** BlockMessageProto sender. */
        public sender: Uint8Array;

        /** BlockMessageProto seqNum. */
        public seqNum: number;

        /** BlockMessageProto sig. */
        public sig: Uint8Array;

        /** BlockMessageProto sigAlgorithm. */
        public sigAlgorithm: string;

        /** BlockMessageProto shardId. */
        public shardId: string;

        /** BlockMessageProto extraBytes. */
        public extraBytes: Uint8Array;

        /**
         * Creates a new BlockMessageProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockMessageProto instance
         */
        public static create(properties?: casper.IBlockMessageProto): casper.BlockMessageProto;

        /**
         * Encodes the specified BlockMessageProto message. Does not implicitly {@link casper.BlockMessageProto.verify|verify} messages.
         * @param message BlockMessageProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockMessageProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockMessageProto message, length delimited. Does not implicitly {@link casper.BlockMessageProto.verify|verify} messages.
         * @param message BlockMessageProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockMessageProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockMessageProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockMessageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockMessageProto;

        /**
         * Decodes a BlockMessageProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockMessageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockMessageProto;

        /**
         * Verifies a BlockMessageProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockMessageProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockMessageProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockMessageProto;

        /**
         * Creates a plain object from a BlockMessageProto message. Also converts values to other types if specified.
         * @param message BlockMessageProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockMessageProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockMessageProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockHashMessageProto. */
    interface IBlockHashMessageProto {

        /** BlockHashMessageProto hash */
        hash?: (Uint8Array|null);
    }

    /** Represents a BlockHashMessageProto. */
    class BlockHashMessageProto implements IBlockHashMessageProto {

        /**
         * Constructs a new BlockHashMessageProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockHashMessageProto);

        /** BlockHashMessageProto hash. */
        public hash: Uint8Array;

        /**
         * Creates a new BlockHashMessageProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockHashMessageProto instance
         */
        public static create(properties?: casper.IBlockHashMessageProto): casper.BlockHashMessageProto;

        /**
         * Encodes the specified BlockHashMessageProto message. Does not implicitly {@link casper.BlockHashMessageProto.verify|verify} messages.
         * @param message BlockHashMessageProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockHashMessageProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockHashMessageProto message, length delimited. Does not implicitly {@link casper.BlockHashMessageProto.verify|verify} messages.
         * @param message BlockHashMessageProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockHashMessageProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockHashMessageProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockHashMessageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockHashMessageProto;

        /**
         * Decodes a BlockHashMessageProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockHashMessageProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockHashMessageProto;

        /**
         * Verifies a BlockHashMessageProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockHashMessageProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockHashMessageProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockHashMessageProto;

        /**
         * Creates a plain object from a BlockHashMessageProto message. Also converts values to other types if specified.
         * @param message BlockHashMessageProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockHashMessageProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockHashMessageProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockMetadataInternal. */
    interface IBlockMetadataInternal {

        /** BlockMetadataInternal blockHash */
        blockHash?: (Uint8Array|null);

        /** BlockMetadataInternal parents */
        parents?: (Uint8Array[]|null);

        /** BlockMetadataInternal sender */
        sender?: (Uint8Array|null);

        /** BlockMetadataInternal justifications */
        justifications?: (casper.IJustificationProto[]|null);

        /** BlockMetadataInternal bonds */
        bonds?: (casper.IBondProto[]|null);

        /** BlockMetadataInternal blockNum */
        blockNum?: (number|Long|null);

        /** BlockMetadataInternal seqNum */
        seqNum?: (number|null);

        /** BlockMetadataInternal invalid */
        invalid?: (boolean|null);
    }

    /** Represents a BlockMetadataInternal. */
    class BlockMetadataInternal implements IBlockMetadataInternal {

        /**
         * Constructs a new BlockMetadataInternal.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockMetadataInternal);

        /** BlockMetadataInternal blockHash. */
        public blockHash: Uint8Array;

        /** BlockMetadataInternal parents. */
        public parents: Uint8Array[];

        /** BlockMetadataInternal sender. */
        public sender: Uint8Array;

        /** BlockMetadataInternal justifications. */
        public justifications: casper.IJustificationProto[];

        /** BlockMetadataInternal bonds. */
        public bonds: casper.IBondProto[];

        /** BlockMetadataInternal blockNum. */
        public blockNum: (number|Long);

        /** BlockMetadataInternal seqNum. */
        public seqNum: number;

        /** BlockMetadataInternal invalid. */
        public invalid: boolean;

        /**
         * Creates a new BlockMetadataInternal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockMetadataInternal instance
         */
        public static create(properties?: casper.IBlockMetadataInternal): casper.BlockMetadataInternal;

        /**
         * Encodes the specified BlockMetadataInternal message. Does not implicitly {@link casper.BlockMetadataInternal.verify|verify} messages.
         * @param message BlockMetadataInternal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockMetadataInternal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockMetadataInternal message, length delimited. Does not implicitly {@link casper.BlockMetadataInternal.verify|verify} messages.
         * @param message BlockMetadataInternal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockMetadataInternal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockMetadataInternal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockMetadataInternal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockMetadataInternal;

        /**
         * Decodes a BlockMetadataInternal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockMetadataInternal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockMetadataInternal;

        /**
         * Verifies a BlockMetadataInternal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockMetadataInternal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockMetadataInternal
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockMetadataInternal;

        /**
         * Creates a plain object from a BlockMetadataInternal message. Also converts values to other types if specified.
         * @param message BlockMetadataInternal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockMetadataInternal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockMetadataInternal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeaderProto. */
    interface IHeaderProto {

        /** HeaderProto parentsHashList */
        parentsHashList?: (Uint8Array[]|null);

        /** HeaderProto deploysHash */
        deploysHash?: (Uint8Array|null);

        /** HeaderProto timestamp */
        timestamp?: (number|Long|null);

        /** HeaderProto version */
        version?: (number|Long|null);

        /** HeaderProto deployCount */
        deployCount?: (number|null);

        /** HeaderProto extraBytes */
        extraBytes?: (Uint8Array|null);
    }

    /** Represents a HeaderProto. */
    class HeaderProto implements IHeaderProto {

        /**
         * Constructs a new HeaderProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IHeaderProto);

        /** HeaderProto parentsHashList. */
        public parentsHashList: Uint8Array[];

        /** HeaderProto deploysHash. */
        public deploysHash: Uint8Array;

        /** HeaderProto timestamp. */
        public timestamp: (number|Long);

        /** HeaderProto version. */
        public version: (number|Long);

        /** HeaderProto deployCount. */
        public deployCount: number;

        /** HeaderProto extraBytes. */
        public extraBytes: Uint8Array;

        /**
         * Creates a new HeaderProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeaderProto instance
         */
        public static create(properties?: casper.IHeaderProto): casper.HeaderProto;

        /**
         * Encodes the specified HeaderProto message. Does not implicitly {@link casper.HeaderProto.verify|verify} messages.
         * @param message HeaderProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IHeaderProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeaderProto message, length delimited. Does not implicitly {@link casper.HeaderProto.verify|verify} messages.
         * @param message HeaderProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IHeaderProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeaderProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeaderProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.HeaderProto;

        /**
         * Decodes a HeaderProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeaderProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.HeaderProto;

        /**
         * Verifies a HeaderProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeaderProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeaderProto
         */
        public static fromObject(object: { [k: string]: any }): casper.HeaderProto;

        /**
         * Creates a plain object from a HeaderProto message. Also converts values to other types if specified.
         * @param message HeaderProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.HeaderProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeaderProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeployDataProto. */
    interface IDeployDataProto {

        /** DeployDataProto deployer */
        deployer?: (Uint8Array|null);

        /** DeployDataProto term */
        term?: (string|null);

        /** DeployDataProto timestamp */
        timestamp?: (number|Long|null);

        /** DeployDataProto sig */
        sig?: (Uint8Array|null);

        /** DeployDataProto sigAlgorithm */
        sigAlgorithm?: (string|null);

        /** DeployDataProto phloPrice */
        phloPrice?: (number|Long|null);

        /** DeployDataProto phloLimit */
        phloLimit?: (number|Long|null);

        /** DeployDataProto validAfterBlockNumber */
        validAfterBlockNumber?: (number|Long|null);
    }

    /**
     * Note: deploys are uniquely keyed by `user`, `timestamp`.
     *
     * **TODO**: details of signatures and payment. See RHOL-781
     */
    class DeployDataProto implements IDeployDataProto {

        /**
         * Constructs a new DeployDataProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IDeployDataProto);

        /** DeployDataProto deployer. */
        public deployer: Uint8Array;

        /** DeployDataProto term. */
        public term: string;

        /** DeployDataProto timestamp. */
        public timestamp: (number|Long);

        /** DeployDataProto sig. */
        public sig: Uint8Array;

        /** DeployDataProto sigAlgorithm. */
        public sigAlgorithm: string;

        /** DeployDataProto phloPrice. */
        public phloPrice: (number|Long);

        /** DeployDataProto phloLimit. */
        public phloLimit: (number|Long);

        /** DeployDataProto validAfterBlockNumber. */
        public validAfterBlockNumber: (number|Long);

        /**
         * Creates a new DeployDataProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeployDataProto instance
         */
        public static create(properties?: casper.IDeployDataProto): casper.DeployDataProto;

        /**
         * Encodes the specified DeployDataProto message. Does not implicitly {@link casper.DeployDataProto.verify|verify} messages.
         * @param message DeployDataProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IDeployDataProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeployDataProto message, length delimited. Does not implicitly {@link casper.DeployDataProto.verify|verify} messages.
         * @param message DeployDataProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IDeployDataProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeployDataProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeployDataProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.DeployDataProto;

        /**
         * Decodes a DeployDataProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeployDataProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.DeployDataProto;

        /**
         * Verifies a DeployDataProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeployDataProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeployDataProto
         */
        public static fromObject(object: { [k: string]: any }): casper.DeployDataProto;

        /**
         * Creates a plain object from a DeployDataProto message. Also converts values to other types if specified.
         * @param message DeployDataProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.DeployDataProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeployDataProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessedDeployProto. */
    interface IProcessedDeployProto {

        /** ProcessedDeployProto deploy */
        deploy?: (casper.IDeployDataProto|null);

        /** ProcessedDeployProto cost */
        cost?: (IPCost|null);

        /** ProcessedDeployProto deployLog */
        deployLog?: (casper.IEventProto[]|null);

        /** ProcessedDeployProto paymentLog */
        paymentLog?: (casper.IEventProto[]|null);

        /** ProcessedDeployProto errored */
        errored?: (boolean|null);
    }

    /** Represents a ProcessedDeployProto. */
    class ProcessedDeployProto implements IProcessedDeployProto {

        /**
         * Constructs a new ProcessedDeployProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IProcessedDeployProto);

        /** ProcessedDeployProto deploy. */
        public deploy?: (casper.IDeployDataProto|null);

        /** ProcessedDeployProto cost. */
        public cost?: (IPCost|null);

        /** ProcessedDeployProto deployLog. */
        public deployLog: casper.IEventProto[];

        /** ProcessedDeployProto paymentLog. */
        public paymentLog: casper.IEventProto[];

        /** ProcessedDeployProto errored. */
        public errored: boolean;

        /**
         * Creates a new ProcessedDeployProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessedDeployProto instance
         */
        public static create(properties?: casper.IProcessedDeployProto): casper.ProcessedDeployProto;

        /**
         * Encodes the specified ProcessedDeployProto message. Does not implicitly {@link casper.ProcessedDeployProto.verify|verify} messages.
         * @param message ProcessedDeployProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IProcessedDeployProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessedDeployProto message, length delimited. Does not implicitly {@link casper.ProcessedDeployProto.verify|verify} messages.
         * @param message ProcessedDeployProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IProcessedDeployProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessedDeployProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessedDeployProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ProcessedDeployProto;

        /**
         * Decodes a ProcessedDeployProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessedDeployProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ProcessedDeployProto;

        /**
         * Verifies a ProcessedDeployProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessedDeployProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessedDeployProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ProcessedDeployProto;

        /**
         * Creates a plain object from a ProcessedDeployProto message. Also converts values to other types if specified.
         * @param message ProcessedDeployProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ProcessedDeployProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessedDeployProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BodyProto. */
    interface IBodyProto {

        /** BodyProto state */
        state?: (casper.IRChainStateProto|null);

        /** BodyProto deploys */
        deploys?: (casper.IProcessedDeployProto[]|null);

        /** BodyProto extraBytes */
        extraBytes?: (Uint8Array|null);
    }

    /** Represents a BodyProto. */
    class BodyProto implements IBodyProto {

        /**
         * Constructs a new BodyProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBodyProto);

        /** BodyProto state. */
        public state?: (casper.IRChainStateProto|null);

        /** BodyProto deploys. */
        public deploys: casper.IProcessedDeployProto[];

        /** BodyProto extraBytes. */
        public extraBytes: Uint8Array;

        /**
         * Creates a new BodyProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BodyProto instance
         */
        public static create(properties?: casper.IBodyProto): casper.BodyProto;

        /**
         * Encodes the specified BodyProto message. Does not implicitly {@link casper.BodyProto.verify|verify} messages.
         * @param message BodyProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBodyProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BodyProto message, length delimited. Does not implicitly {@link casper.BodyProto.verify|verify} messages.
         * @param message BodyProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBodyProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BodyProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BodyProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BodyProto;

        /**
         * Decodes a BodyProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BodyProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BodyProto;

        /**
         * Verifies a BodyProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BodyProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BodyProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BodyProto;

        /**
         * Creates a plain object from a BodyProto message. Also converts values to other types if specified.
         * @param message BodyProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BodyProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BodyProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JustificationProto. */
    interface IJustificationProto {

        /** JustificationProto validator */
        validator?: (Uint8Array|null);

        /** JustificationProto latestBlockHash */
        latestBlockHash?: (Uint8Array|null);
    }

    /** Represents a JustificationProto. */
    class JustificationProto implements IJustificationProto {

        /**
         * Constructs a new JustificationProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IJustificationProto);

        /** JustificationProto validator. */
        public validator: Uint8Array;

        /** JustificationProto latestBlockHash. */
        public latestBlockHash: Uint8Array;

        /**
         * Creates a new JustificationProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JustificationProto instance
         */
        public static create(properties?: casper.IJustificationProto): casper.JustificationProto;

        /**
         * Encodes the specified JustificationProto message. Does not implicitly {@link casper.JustificationProto.verify|verify} messages.
         * @param message JustificationProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IJustificationProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JustificationProto message, length delimited. Does not implicitly {@link casper.JustificationProto.verify|verify} messages.
         * @param message JustificationProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IJustificationProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JustificationProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JustificationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.JustificationProto;

        /**
         * Decodes a JustificationProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JustificationProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.JustificationProto;

        /**
         * Verifies a JustificationProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JustificationProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JustificationProto
         */
        public static fromObject(object: { [k: string]: any }): casper.JustificationProto;

        /**
         * Creates a plain object from a JustificationProto message. Also converts values to other types if specified.
         * @param message JustificationProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.JustificationProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JustificationProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RChainStateProto. */
    interface IRChainStateProto {

        /** RChainStateProto preStateHash */
        preStateHash?: (Uint8Array|null);

        /** RChainStateProto postStateHash */
        postStateHash?: (Uint8Array|null);

        /** RChainStateProto bonds */
        bonds?: (casper.IBondProto[]|null);

        /** RChainStateProto blockNumber */
        blockNumber?: (number|Long|null);
    }

    /** Represents a RChainStateProto. */
    class RChainStateProto implements IRChainStateProto {

        /**
         * Constructs a new RChainStateProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IRChainStateProto);

        /** RChainStateProto preStateHash. */
        public preStateHash: Uint8Array;

        /** RChainStateProto postStateHash. */
        public postStateHash: Uint8Array;

        /** RChainStateProto bonds. */
        public bonds: casper.IBondProto[];

        /** RChainStateProto blockNumber. */
        public blockNumber: (number|Long);

        /**
         * Creates a new RChainStateProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RChainStateProto instance
         */
        public static create(properties?: casper.IRChainStateProto): casper.RChainStateProto;

        /**
         * Encodes the specified RChainStateProto message. Does not implicitly {@link casper.RChainStateProto.verify|verify} messages.
         * @param message RChainStateProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IRChainStateProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RChainStateProto message, length delimited. Does not implicitly {@link casper.RChainStateProto.verify|verify} messages.
         * @param message RChainStateProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IRChainStateProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RChainStateProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RChainStateProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.RChainStateProto;

        /**
         * Decodes a RChainStateProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RChainStateProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.RChainStateProto;

        /**
         * Verifies a RChainStateProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RChainStateProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RChainStateProto
         */
        public static fromObject(object: { [k: string]: any }): casper.RChainStateProto;

        /**
         * Creates a plain object from a RChainStateProto message. Also converts values to other types if specified.
         * @param message RChainStateProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.RChainStateProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RChainStateProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventProto. */
    interface IEventProto {

        /** EventProto produce */
        produce?: (casper.IProduceEventProto|null);

        /** EventProto consume */
        consume?: (casper.IConsumeEventProto|null);

        /** EventProto comm */
        comm?: (casper.ICommEventProto|null);
    }

    /** Represents an EventProto. */
    class EventProto implements IEventProto {

        /**
         * Constructs a new EventProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IEventProto);

        /** EventProto produce. */
        public produce?: (casper.IProduceEventProto|null);

        /** EventProto consume. */
        public consume?: (casper.IConsumeEventProto|null);

        /** EventProto comm. */
        public comm?: (casper.ICommEventProto|null);

        /** EventProto eventInstance. */
        public eventInstance?: ("produce"|"consume"|"comm");

        /**
         * Creates a new EventProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventProto instance
         */
        public static create(properties?: casper.IEventProto): casper.EventProto;

        /**
         * Encodes the specified EventProto message. Does not implicitly {@link casper.EventProto.verify|verify} messages.
         * @param message EventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventProto message, length delimited. Does not implicitly {@link casper.EventProto.verify|verify} messages.
         * @param message EventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.EventProto;

        /**
         * Decodes an EventProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.EventProto;

        /**
         * Verifies an EventProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventProto
         */
        public static fromObject(object: { [k: string]: any }): casper.EventProto;

        /**
         * Creates a plain object from an EventProto message. Also converts values to other types if specified.
         * @param message EventProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.EventProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProduceEventProto. */
    interface IProduceEventProto {

        /** ProduceEventProto channelsHash */
        channelsHash?: (Uint8Array|null);

        /** ProduceEventProto hash */
        hash?: (Uint8Array|null);

        /** ProduceEventProto persistent */
        persistent?: (boolean|null);

        /** ProduceEventProto timesRepeated */
        timesRepeated?: (number|null);
    }

    /** Represents a ProduceEventProto. */
    class ProduceEventProto implements IProduceEventProto {

        /**
         * Constructs a new ProduceEventProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IProduceEventProto);

        /** ProduceEventProto channelsHash. */
        public channelsHash: Uint8Array;

        /** ProduceEventProto hash. */
        public hash: Uint8Array;

        /** ProduceEventProto persistent. */
        public persistent: boolean;

        /** ProduceEventProto timesRepeated. */
        public timesRepeated: number;

        /**
         * Creates a new ProduceEventProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProduceEventProto instance
         */
        public static create(properties?: casper.IProduceEventProto): casper.ProduceEventProto;

        /**
         * Encodes the specified ProduceEventProto message. Does not implicitly {@link casper.ProduceEventProto.verify|verify} messages.
         * @param message ProduceEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IProduceEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProduceEventProto message, length delimited. Does not implicitly {@link casper.ProduceEventProto.verify|verify} messages.
         * @param message ProduceEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IProduceEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProduceEventProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProduceEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ProduceEventProto;

        /**
         * Decodes a ProduceEventProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProduceEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ProduceEventProto;

        /**
         * Verifies a ProduceEventProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProduceEventProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProduceEventProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ProduceEventProto;

        /**
         * Creates a plain object from a ProduceEventProto message. Also converts values to other types if specified.
         * @param message ProduceEventProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ProduceEventProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProduceEventProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConsumeEventProto. */
    interface IConsumeEventProto {

        /** ConsumeEventProto channelsHashes */
        channelsHashes?: (Uint8Array[]|null);

        /** ConsumeEventProto hash */
        hash?: (Uint8Array|null);

        /** ConsumeEventProto persistent */
        persistent?: (boolean|null);
    }

    /** Represents a ConsumeEventProto. */
    class ConsumeEventProto implements IConsumeEventProto {

        /**
         * Constructs a new ConsumeEventProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IConsumeEventProto);

        /** ConsumeEventProto channelsHashes. */
        public channelsHashes: Uint8Array[];

        /** ConsumeEventProto hash. */
        public hash: Uint8Array;

        /** ConsumeEventProto persistent. */
        public persistent: boolean;

        /**
         * Creates a new ConsumeEventProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConsumeEventProto instance
         */
        public static create(properties?: casper.IConsumeEventProto): casper.ConsumeEventProto;

        /**
         * Encodes the specified ConsumeEventProto message. Does not implicitly {@link casper.ConsumeEventProto.verify|verify} messages.
         * @param message ConsumeEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IConsumeEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConsumeEventProto message, length delimited. Does not implicitly {@link casper.ConsumeEventProto.verify|verify} messages.
         * @param message ConsumeEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IConsumeEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConsumeEventProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConsumeEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ConsumeEventProto;

        /**
         * Decodes a ConsumeEventProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConsumeEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ConsumeEventProto;

        /**
         * Verifies a ConsumeEventProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConsumeEventProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConsumeEventProto
         */
        public static fromObject(object: { [k: string]: any }): casper.ConsumeEventProto;

        /**
         * Creates a plain object from a ConsumeEventProto message. Also converts values to other types if specified.
         * @param message ConsumeEventProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ConsumeEventProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConsumeEventProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommEventProto. */
    interface ICommEventProto {

        /** CommEventProto consume */
        consume?: (casper.IConsumeEventProto|null);

        /** CommEventProto produces */
        produces?: (casper.IProduceEventProto[]|null);

        /** CommEventProto peeks */
        peeks?: (casper.IPeekProto[]|null);
    }

    /** Represents a CommEventProto. */
    class CommEventProto implements ICommEventProto {

        /**
         * Constructs a new CommEventProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.ICommEventProto);

        /** CommEventProto consume. */
        public consume?: (casper.IConsumeEventProto|null);

        /** CommEventProto produces. */
        public produces: casper.IProduceEventProto[];

        /** CommEventProto peeks. */
        public peeks: casper.IPeekProto[];

        /**
         * Creates a new CommEventProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommEventProto instance
         */
        public static create(properties?: casper.ICommEventProto): casper.CommEventProto;

        /**
         * Encodes the specified CommEventProto message. Does not implicitly {@link casper.CommEventProto.verify|verify} messages.
         * @param message CommEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.ICommEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommEventProto message, length delimited. Does not implicitly {@link casper.CommEventProto.verify|verify} messages.
         * @param message CommEventProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.ICommEventProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommEventProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.CommEventProto;

        /**
         * Decodes a CommEventProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommEventProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.CommEventProto;

        /**
         * Verifies a CommEventProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommEventProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommEventProto
         */
        public static fromObject(object: { [k: string]: any }): casper.CommEventProto;

        /**
         * Creates a plain object from a CommEventProto message. Also converts values to other types if specified.
         * @param message CommEventProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.CommEventProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommEventProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PeekProto. */
    interface IPeekProto {

        /** PeekProto channelIndex */
        channelIndex?: (number|null);
    }

    /** Represents a PeekProto. */
    class PeekProto implements IPeekProto {

        /**
         * Constructs a new PeekProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IPeekProto);

        /** PeekProto channelIndex. */
        public channelIndex: number;

        /**
         * Creates a new PeekProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeekProto instance
         */
        public static create(properties?: casper.IPeekProto): casper.PeekProto;

        /**
         * Encodes the specified PeekProto message. Does not implicitly {@link casper.PeekProto.verify|verify} messages.
         * @param message PeekProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IPeekProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeekProto message, length delimited. Does not implicitly {@link casper.PeekProto.verify|verify} messages.
         * @param message PeekProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IPeekProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeekProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PeekProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.PeekProto;

        /**
         * Decodes a PeekProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PeekProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.PeekProto;

        /**
         * Verifies a PeekProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeekProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeekProto
         */
        public static fromObject(object: { [k: string]: any }): casper.PeekProto;

        /**
         * Creates a plain object from a PeekProto message. Also converts values to other types if specified.
         * @param message PeekProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.PeekProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeekProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BondProto. */
    interface IBondProto {

        /** BondProto validator */
        validator?: (Uint8Array|null);

        /** BondProto stake */
        stake?: (number|Long|null);
    }

    /** Represents a BondProto. */
    class BondProto implements IBondProto {

        /**
         * Constructs a new BondProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBondProto);

        /** BondProto validator. */
        public validator: Uint8Array;

        /** BondProto stake. */
        public stake: (number|Long);

        /**
         * Creates a new BondProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BondProto instance
         */
        public static create(properties?: casper.IBondProto): casper.BondProto;

        /**
         * Encodes the specified BondProto message. Does not implicitly {@link casper.BondProto.verify|verify} messages.
         * @param message BondProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBondProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BondProto message, length delimited. Does not implicitly {@link casper.BondProto.verify|verify} messages.
         * @param message BondProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBondProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BondProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BondProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BondProto;

        /**
         * Decodes a BondProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BondProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BondProto;

        /**
         * Verifies a BondProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BondProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BondProto
         */
        public static fromObject(object: { [k: string]: any }): casper.BondProto;

        /**
         * Creates a plain object from a BondProto message. Also converts values to other types if specified.
         * @param message BondProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BondProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BondProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FindDeployQuery. */
    interface IFindDeployQuery {

        /** FindDeployQuery deployId */
        deployId?: (Uint8Array|null);
    }

    /** Represents a FindDeployQuery. */
    class FindDeployQuery implements IFindDeployQuery {

        /**
         * Constructs a new FindDeployQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IFindDeployQuery);

        /** FindDeployQuery deployId. */
        public deployId: Uint8Array;

        /**
         * Creates a new FindDeployQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FindDeployQuery instance
         */
        public static create(properties?: casper.IFindDeployQuery): casper.FindDeployQuery;

        /**
         * Encodes the specified FindDeployQuery message. Does not implicitly {@link casper.FindDeployQuery.verify|verify} messages.
         * @param message FindDeployQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IFindDeployQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindDeployQuery message, length delimited. Does not implicitly {@link casper.FindDeployQuery.verify|verify} messages.
         * @param message FindDeployQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IFindDeployQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindDeployQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindDeployQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.FindDeployQuery;

        /**
         * Decodes a FindDeployQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindDeployQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.FindDeployQuery;

        /**
         * Verifies a FindDeployQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FindDeployQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FindDeployQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.FindDeployQuery;

        /**
         * Creates a plain object from a FindDeployQuery message. Also converts values to other types if specified.
         * @param message FindDeployQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.FindDeployQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FindDeployQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockQuery. */
    interface IBlockQuery {

        /** BlockQuery hash */
        hash?: (string|null);
    }

    /** Represents a BlockQuery. */
    class BlockQuery implements IBlockQuery {

        /**
         * Constructs a new BlockQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockQuery);

        /** BlockQuery hash. */
        public hash: string;

        /**
         * Creates a new BlockQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockQuery instance
         */
        public static create(properties?: casper.IBlockQuery): casper.BlockQuery;

        /**
         * Encodes the specified BlockQuery message. Does not implicitly {@link casper.BlockQuery.verify|verify} messages.
         * @param message BlockQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockQuery message, length delimited. Does not implicitly {@link casper.BlockQuery.verify|verify} messages.
         * @param message BlockQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockQuery;

        /**
         * Decodes a BlockQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockQuery;

        /**
         * Verifies a BlockQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockQuery;

        /**
         * Creates a plain object from a BlockQuery message. Also converts values to other types if specified.
         * @param message BlockQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlocksQuery. */
    interface IBlocksQuery {

        /** BlocksQuery depth */
        depth?: (number|null);
    }

    /** Represents a BlocksQuery. */
    class BlocksQuery implements IBlocksQuery {

        /**
         * Constructs a new BlocksQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlocksQuery);

        /** BlocksQuery depth. */
        public depth: number;

        /**
         * Creates a new BlocksQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlocksQuery instance
         */
        public static create(properties?: casper.IBlocksQuery): casper.BlocksQuery;

        /**
         * Encodes the specified BlocksQuery message. Does not implicitly {@link casper.BlocksQuery.verify|verify} messages.
         * @param message BlocksQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlocksQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlocksQuery message, length delimited. Does not implicitly {@link casper.BlocksQuery.verify|verify} messages.
         * @param message BlocksQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlocksQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlocksQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlocksQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlocksQuery;

        /**
         * Decodes a BlocksQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlocksQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlocksQuery;

        /**
         * Verifies a BlocksQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlocksQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlocksQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.BlocksQuery;

        /**
         * Creates a plain object from a BlocksQuery message. Also converts values to other types if specified.
         * @param message BlocksQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlocksQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlocksQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DataAtNameQuery. */
    interface IDataAtNameQuery {

        /** DataAtNameQuery depth */
        depth?: (number|null);

        /** DataAtNameQuery name */
        name?: (IPar|null);
    }

    /** Represents a DataAtNameQuery. */
    class DataAtNameQuery implements IDataAtNameQuery {

        /**
         * Constructs a new DataAtNameQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IDataAtNameQuery);

        /** DataAtNameQuery depth. */
        public depth: number;

        /** DataAtNameQuery name. */
        public name?: (IPar|null);

        /**
         * Creates a new DataAtNameQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataAtNameQuery instance
         */
        public static create(properties?: casper.IDataAtNameQuery): casper.DataAtNameQuery;

        /**
         * Encodes the specified DataAtNameQuery message. Does not implicitly {@link casper.DataAtNameQuery.verify|verify} messages.
         * @param message DataAtNameQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IDataAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DataAtNameQuery message, length delimited. Does not implicitly {@link casper.DataAtNameQuery.verify|verify} messages.
         * @param message DataAtNameQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IDataAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataAtNameQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataAtNameQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.DataAtNameQuery;

        /**
         * Decodes a DataAtNameQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DataAtNameQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.DataAtNameQuery;

        /**
         * Verifies a DataAtNameQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DataAtNameQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DataAtNameQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.DataAtNameQuery;

        /**
         * Creates a plain object from a DataAtNameQuery message. Also converts values to other types if specified.
         * @param message DataAtNameQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.DataAtNameQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DataAtNameQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContinuationAtNameQuery. */
    interface IContinuationAtNameQuery {

        /** ContinuationAtNameQuery depth */
        depth?: (number|null);

        /** ContinuationAtNameQuery names */
        names?: (IPar[]|null);
    }

    /** Represents a ContinuationAtNameQuery. */
    class ContinuationAtNameQuery implements IContinuationAtNameQuery {

        /**
         * Constructs a new ContinuationAtNameQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IContinuationAtNameQuery);

        /** ContinuationAtNameQuery depth. */
        public depth: number;

        /** ContinuationAtNameQuery names. */
        public names: IPar[];

        /**
         * Creates a new ContinuationAtNameQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContinuationAtNameQuery instance
         */
        public static create(properties?: casper.IContinuationAtNameQuery): casper.ContinuationAtNameQuery;

        /**
         * Encodes the specified ContinuationAtNameQuery message. Does not implicitly {@link casper.ContinuationAtNameQuery.verify|verify} messages.
         * @param message ContinuationAtNameQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IContinuationAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContinuationAtNameQuery message, length delimited. Does not implicitly {@link casper.ContinuationAtNameQuery.verify|verify} messages.
         * @param message ContinuationAtNameQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IContinuationAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContinuationAtNameQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContinuationAtNameQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ContinuationAtNameQuery;

        /**
         * Decodes a ContinuationAtNameQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContinuationAtNameQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ContinuationAtNameQuery;

        /**
         * Verifies a ContinuationAtNameQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContinuationAtNameQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContinuationAtNameQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.ContinuationAtNameQuery;

        /**
         * Creates a plain object from a ContinuationAtNameQuery message. Also converts values to other types if specified.
         * @param message ContinuationAtNameQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ContinuationAtNameQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContinuationAtNameQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VisualizeDagQuery. */
    interface IVisualizeDagQuery {

        /** VisualizeDagQuery depth */
        depth?: (number|null);

        /** VisualizeDagQuery showJustificationLines */
        showJustificationLines?: (boolean|null);
    }

    /** Represents a VisualizeDagQuery. */
    class VisualizeDagQuery implements IVisualizeDagQuery {

        /**
         * Constructs a new VisualizeDagQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IVisualizeDagQuery);

        /** VisualizeDagQuery depth. */
        public depth: number;

        /** VisualizeDagQuery showJustificationLines. */
        public showJustificationLines: boolean;

        /**
         * Creates a new VisualizeDagQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VisualizeDagQuery instance
         */
        public static create(properties?: casper.IVisualizeDagQuery): casper.VisualizeDagQuery;

        /**
         * Encodes the specified VisualizeDagQuery message. Does not implicitly {@link casper.VisualizeDagQuery.verify|verify} messages.
         * @param message VisualizeDagQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IVisualizeDagQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VisualizeDagQuery message, length delimited. Does not implicitly {@link casper.VisualizeDagQuery.verify|verify} messages.
         * @param message VisualizeDagQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IVisualizeDagQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VisualizeDagQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VisualizeDagQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.VisualizeDagQuery;

        /**
         * Decodes a VisualizeDagQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VisualizeDagQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.VisualizeDagQuery;

        /**
         * Verifies a VisualizeDagQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VisualizeDagQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VisualizeDagQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.VisualizeDagQuery;

        /**
         * Creates a plain object from a VisualizeDagQuery message. Also converts values to other types if specified.
         * @param message VisualizeDagQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.VisualizeDagQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VisualizeDagQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MachineVerifyQuery. */
    interface IMachineVerifyQuery {
    }

    /** Represents a MachineVerifyQuery. */
    class MachineVerifyQuery implements IMachineVerifyQuery {

        /**
         * Constructs a new MachineVerifyQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IMachineVerifyQuery);

        /**
         * Creates a new MachineVerifyQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MachineVerifyQuery instance
         */
        public static create(properties?: casper.IMachineVerifyQuery): casper.MachineVerifyQuery;

        /**
         * Encodes the specified MachineVerifyQuery message. Does not implicitly {@link casper.MachineVerifyQuery.verify|verify} messages.
         * @param message MachineVerifyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IMachineVerifyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MachineVerifyQuery message, length delimited. Does not implicitly {@link casper.MachineVerifyQuery.verify|verify} messages.
         * @param message MachineVerifyQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IMachineVerifyQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MachineVerifyQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MachineVerifyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.MachineVerifyQuery;

        /**
         * Decodes a MachineVerifyQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MachineVerifyQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.MachineVerifyQuery;

        /**
         * Verifies a MachineVerifyQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MachineVerifyQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MachineVerifyQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.MachineVerifyQuery;

        /**
         * Creates a plain object from a MachineVerifyQuery message. Also converts values to other types if specified.
         * @param message MachineVerifyQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.MachineVerifyQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MachineVerifyQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateNamePreviewQuery. */
    interface IPrivateNamePreviewQuery {

        /** PrivateNamePreviewQuery user */
        user?: (Uint8Array|null);

        /** PrivateNamePreviewQuery timestamp */
        timestamp?: (number|Long|null);

        /** PrivateNamePreviewQuery nameQty */
        nameQty?: (number|null);
    }

    /** Represents a PrivateNamePreviewQuery. */
    class PrivateNamePreviewQuery implements IPrivateNamePreviewQuery {

        /**
         * Constructs a new PrivateNamePreviewQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IPrivateNamePreviewQuery);

        /** PrivateNamePreviewQuery user. */
        public user: Uint8Array;

        /** PrivateNamePreviewQuery timestamp. */
        public timestamp: (number|Long);

        /** PrivateNamePreviewQuery nameQty. */
        public nameQty: number;

        /**
         * Creates a new PrivateNamePreviewQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateNamePreviewQuery instance
         */
        public static create(properties?: casper.IPrivateNamePreviewQuery): casper.PrivateNamePreviewQuery;

        /**
         * Encodes the specified PrivateNamePreviewQuery message. Does not implicitly {@link casper.PrivateNamePreviewQuery.verify|verify} messages.
         * @param message PrivateNamePreviewQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IPrivateNamePreviewQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateNamePreviewQuery message, length delimited. Does not implicitly {@link casper.PrivateNamePreviewQuery.verify|verify} messages.
         * @param message PrivateNamePreviewQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IPrivateNamePreviewQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateNamePreviewQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateNamePreviewQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.PrivateNamePreviewQuery;

        /**
         * Decodes a PrivateNamePreviewQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateNamePreviewQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.PrivateNamePreviewQuery;

        /**
         * Verifies a PrivateNamePreviewQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateNamePreviewQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateNamePreviewQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.PrivateNamePreviewQuery;

        /**
         * Creates a plain object from a PrivateNamePreviewQuery message. Also converts values to other types if specified.
         * @param message PrivateNamePreviewQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.PrivateNamePreviewQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateNamePreviewQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LastFinalizedBlockQuery. */
    interface ILastFinalizedBlockQuery {
    }

    /** Represents a LastFinalizedBlockQuery. */
    class LastFinalizedBlockQuery implements ILastFinalizedBlockQuery {

        /**
         * Constructs a new LastFinalizedBlockQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.ILastFinalizedBlockQuery);

        /**
         * Creates a new LastFinalizedBlockQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LastFinalizedBlockQuery instance
         */
        public static create(properties?: casper.ILastFinalizedBlockQuery): casper.LastFinalizedBlockQuery;

        /**
         * Encodes the specified LastFinalizedBlockQuery message. Does not implicitly {@link casper.LastFinalizedBlockQuery.verify|verify} messages.
         * @param message LastFinalizedBlockQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.ILastFinalizedBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LastFinalizedBlockQuery message, length delimited. Does not implicitly {@link casper.LastFinalizedBlockQuery.verify|verify} messages.
         * @param message LastFinalizedBlockQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.ILastFinalizedBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastFinalizedBlockQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LastFinalizedBlockQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.LastFinalizedBlockQuery;

        /**
         * Decodes a LastFinalizedBlockQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LastFinalizedBlockQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.LastFinalizedBlockQuery;

        /**
         * Verifies a LastFinalizedBlockQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LastFinalizedBlockQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LastFinalizedBlockQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.LastFinalizedBlockQuery;

        /**
         * Creates a plain object from a LastFinalizedBlockQuery message. Also converts values to other types if specified.
         * @param message LastFinalizedBlockQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.LastFinalizedBlockQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LastFinalizedBlockQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IsFinalizedQuery. */
    interface IIsFinalizedQuery {

        /** IsFinalizedQuery hash */
        hash?: (string|null);
    }

    /** Represents an IsFinalizedQuery. */
    class IsFinalizedQuery implements IIsFinalizedQuery {

        /**
         * Constructs a new IsFinalizedQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IIsFinalizedQuery);

        /** IsFinalizedQuery hash. */
        public hash: string;

        /**
         * Creates a new IsFinalizedQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IsFinalizedQuery instance
         */
        public static create(properties?: casper.IIsFinalizedQuery): casper.IsFinalizedQuery;

        /**
         * Encodes the specified IsFinalizedQuery message. Does not implicitly {@link casper.IsFinalizedQuery.verify|verify} messages.
         * @param message IsFinalizedQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IIsFinalizedQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IsFinalizedQuery message, length delimited. Does not implicitly {@link casper.IsFinalizedQuery.verify|verify} messages.
         * @param message IsFinalizedQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IIsFinalizedQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsFinalizedQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsFinalizedQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.IsFinalizedQuery;

        /**
         * Decodes an IsFinalizedQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IsFinalizedQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.IsFinalizedQuery;

        /**
         * Verifies an IsFinalizedQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IsFinalizedQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IsFinalizedQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.IsFinalizedQuery;

        /**
         * Creates a plain object from an IsFinalizedQuery message. Also converts values to other types if specified.
         * @param message IsFinalizedQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.IsFinalizedQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IsFinalizedQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LightBlockInfo. */
    interface ILightBlockInfo {

        /** LightBlockInfo blockHash */
        blockHash?: (string|null);

        /** LightBlockInfo blockSize */
        blockSize?: (string|null);

        /** LightBlockInfo blockNumber */
        blockNumber?: (number|Long|null);

        /** LightBlockInfo version */
        version?: (number|Long|null);

        /** LightBlockInfo deployCount */
        deployCount?: (number|null);

        /** LightBlockInfo tupleSpaceHash */
        tupleSpaceHash?: (string|null);

        /** LightBlockInfo timestamp */
        timestamp?: (number|Long|null);

        /** LightBlockInfo faultTolerance */
        faultTolerance?: (number|null);

        /** LightBlockInfo mainParentHash */
        mainParentHash?: (string|null);

        /** LightBlockInfo parentsHashList */
        parentsHashList?: (string[]|null);

        /** LightBlockInfo sender */
        sender?: (string|null);
    }

    /** Represents a LightBlockInfo. */
    class LightBlockInfo implements ILightBlockInfo {

        /**
         * Constructs a new LightBlockInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.ILightBlockInfo);

        /** LightBlockInfo blockHash. */
        public blockHash: string;

        /** LightBlockInfo blockSize. */
        public blockSize: string;

        /** LightBlockInfo blockNumber. */
        public blockNumber: (number|Long);

        /** LightBlockInfo version. */
        public version: (number|Long);

        /** LightBlockInfo deployCount. */
        public deployCount: number;

        /** LightBlockInfo tupleSpaceHash. */
        public tupleSpaceHash: string;

        /** LightBlockInfo timestamp. */
        public timestamp: (number|Long);

        /** LightBlockInfo faultTolerance. */
        public faultTolerance: number;

        /** LightBlockInfo mainParentHash. */
        public mainParentHash: string;

        /** LightBlockInfo parentsHashList. */
        public parentsHashList: string[];

        /** LightBlockInfo sender. */
        public sender: string;

        /**
         * Creates a new LightBlockInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LightBlockInfo instance
         */
        public static create(properties?: casper.ILightBlockInfo): casper.LightBlockInfo;

        /**
         * Encodes the specified LightBlockInfo message. Does not implicitly {@link casper.LightBlockInfo.verify|verify} messages.
         * @param message LightBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.ILightBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LightBlockInfo message, length delimited. Does not implicitly {@link casper.LightBlockInfo.verify|verify} messages.
         * @param message LightBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.ILightBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LightBlockInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LightBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.LightBlockInfo;

        /**
         * Decodes a LightBlockInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LightBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.LightBlockInfo;

        /**
         * Verifies a LightBlockInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LightBlockInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LightBlockInfo
         */
        public static fromObject(object: { [k: string]: any }): casper.LightBlockInfo;

        /**
         * Creates a plain object from a LightBlockInfo message. Also converts values to other types if specified.
         * @param message LightBlockInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.LightBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LightBlockInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockInfo. */
    interface IBlockInfo {

        /** BlockInfo blockHash */
        blockHash?: (string|null);

        /** BlockInfo blockSize */
        blockSize?: (string|null);

        /** BlockInfo blockNumber */
        blockNumber?: (number|Long|null);

        /** BlockInfo version */
        version?: (number|Long|null);

        /** BlockInfo deployCount */
        deployCount?: (number|null);

        /** BlockInfo tupleSpaceHash */
        tupleSpaceHash?: (string|null);

        /** BlockInfo timestamp */
        timestamp?: (number|Long|null);

        /** BlockInfo faultTolerance */
        faultTolerance?: (number|null);

        /** BlockInfo mainParentHash */
        mainParentHash?: (string|null);

        /** BlockInfo parentsHashList */
        parentsHashList?: (string[]|null);

        /** BlockInfo sender */
        sender?: (string|null);

        /** BlockInfo shardId */
        shardId?: (string|null);

        /** BlockInfo bondsValidatorList */
        bondsValidatorList?: (string[]|null);

        /** BlockInfo deployCost */
        deployCost?: (string[]|null);
    }

    /** Represents a BlockInfo. */
    class BlockInfo implements IBlockInfo {

        /**
         * Constructs a new BlockInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IBlockInfo);

        /** BlockInfo blockHash. */
        public blockHash: string;

        /** BlockInfo blockSize. */
        public blockSize: string;

        /** BlockInfo blockNumber. */
        public blockNumber: (number|Long);

        /** BlockInfo version. */
        public version: (number|Long);

        /** BlockInfo deployCount. */
        public deployCount: number;

        /** BlockInfo tupleSpaceHash. */
        public tupleSpaceHash: string;

        /** BlockInfo timestamp. */
        public timestamp: (number|Long);

        /** BlockInfo faultTolerance. */
        public faultTolerance: number;

        /** BlockInfo mainParentHash. */
        public mainParentHash: string;

        /** BlockInfo parentsHashList. */
        public parentsHashList: string[];

        /** BlockInfo sender. */
        public sender: string;

        /** BlockInfo shardId. */
        public shardId: string;

        /** BlockInfo bondsValidatorList. */
        public bondsValidatorList: string[];

        /** BlockInfo deployCost. */
        public deployCost: string[];

        /**
         * Creates a new BlockInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockInfo instance
         */
        public static create(properties?: casper.IBlockInfo): casper.BlockInfo;

        /**
         * Encodes the specified BlockInfo message. Does not implicitly {@link casper.BlockInfo.verify|verify} messages.
         * @param message BlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockInfo message, length delimited. Does not implicitly {@link casper.BlockInfo.verify|verify} messages.
         * @param message BlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.BlockInfo;

        /**
         * Decodes a BlockInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.BlockInfo;

        /**
         * Verifies a BlockInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockInfo
         */
        public static fromObject(object: { [k: string]: any }): casper.BlockInfo;

        /**
         * Creates a plain object from a BlockInfo message. Also converts values to other types if specified.
         * @param message BlockInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.BlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DataWithBlockInfo. */
    interface IDataWithBlockInfo {

        /** DataWithBlockInfo postBlockData */
        postBlockData?: (IPar[]|null);

        /** DataWithBlockInfo block */
        block?: (casper.ILightBlockInfo|null);
    }

    /** Represents a DataWithBlockInfo. */
    class DataWithBlockInfo implements IDataWithBlockInfo {

        /**
         * Constructs a new DataWithBlockInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IDataWithBlockInfo);

        /** DataWithBlockInfo postBlockData. */
        public postBlockData: IPar[];

        /** DataWithBlockInfo block. */
        public block?: (casper.ILightBlockInfo|null);

        /**
         * Creates a new DataWithBlockInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataWithBlockInfo instance
         */
        public static create(properties?: casper.IDataWithBlockInfo): casper.DataWithBlockInfo;

        /**
         * Encodes the specified DataWithBlockInfo message. Does not implicitly {@link casper.DataWithBlockInfo.verify|verify} messages.
         * @param message DataWithBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IDataWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DataWithBlockInfo message, length delimited. Does not implicitly {@link casper.DataWithBlockInfo.verify|verify} messages.
         * @param message DataWithBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IDataWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataWithBlockInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataWithBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.DataWithBlockInfo;

        /**
         * Decodes a DataWithBlockInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DataWithBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.DataWithBlockInfo;

        /**
         * Verifies a DataWithBlockInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DataWithBlockInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DataWithBlockInfo
         */
        public static fromObject(object: { [k: string]: any }): casper.DataWithBlockInfo;

        /**
         * Creates a plain object from a DataWithBlockInfo message. Also converts values to other types if specified.
         * @param message DataWithBlockInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.DataWithBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DataWithBlockInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContinuationsWithBlockInfo. */
    interface IContinuationsWithBlockInfo {

        /** ContinuationsWithBlockInfo postBlockContinuations */
        postBlockContinuations?: (casper.IWaitingContinuationInfo[]|null);

        /** ContinuationsWithBlockInfo block */
        block?: (casper.ILightBlockInfo|null);
    }

    /** Represents a ContinuationsWithBlockInfo. */
    class ContinuationsWithBlockInfo implements IContinuationsWithBlockInfo {

        /**
         * Constructs a new ContinuationsWithBlockInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IContinuationsWithBlockInfo);

        /** ContinuationsWithBlockInfo postBlockContinuations. */
        public postBlockContinuations: casper.IWaitingContinuationInfo[];

        /** ContinuationsWithBlockInfo block. */
        public block?: (casper.ILightBlockInfo|null);

        /**
         * Creates a new ContinuationsWithBlockInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContinuationsWithBlockInfo instance
         */
        public static create(properties?: casper.IContinuationsWithBlockInfo): casper.ContinuationsWithBlockInfo;

        /**
         * Encodes the specified ContinuationsWithBlockInfo message. Does not implicitly {@link casper.ContinuationsWithBlockInfo.verify|verify} messages.
         * @param message ContinuationsWithBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IContinuationsWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContinuationsWithBlockInfo message, length delimited. Does not implicitly {@link casper.ContinuationsWithBlockInfo.verify|verify} messages.
         * @param message ContinuationsWithBlockInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IContinuationsWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContinuationsWithBlockInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContinuationsWithBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.ContinuationsWithBlockInfo;

        /**
         * Decodes a ContinuationsWithBlockInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContinuationsWithBlockInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.ContinuationsWithBlockInfo;

        /**
         * Verifies a ContinuationsWithBlockInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContinuationsWithBlockInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContinuationsWithBlockInfo
         */
        public static fromObject(object: { [k: string]: any }): casper.ContinuationsWithBlockInfo;

        /**
         * Creates a plain object from a ContinuationsWithBlockInfo message. Also converts values to other types if specified.
         * @param message ContinuationsWithBlockInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.ContinuationsWithBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContinuationsWithBlockInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WaitingContinuationInfo. */
    interface IWaitingContinuationInfo {

        /** WaitingContinuationInfo postBlockPatterns */
        postBlockPatterns?: (IBindPattern[]|null);

        /** WaitingContinuationInfo postBlockContinuation */
        postBlockContinuation?: (IPar|null);
    }

    /** Represents a WaitingContinuationInfo. */
    class WaitingContinuationInfo implements IWaitingContinuationInfo {

        /**
         * Constructs a new WaitingContinuationInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IWaitingContinuationInfo);

        /** WaitingContinuationInfo postBlockPatterns. */
        public postBlockPatterns: IBindPattern[];

        /** WaitingContinuationInfo postBlockContinuation. */
        public postBlockContinuation?: (IPar|null);

        /**
         * Creates a new WaitingContinuationInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WaitingContinuationInfo instance
         */
        public static create(properties?: casper.IWaitingContinuationInfo): casper.WaitingContinuationInfo;

        /**
         * Encodes the specified WaitingContinuationInfo message. Does not implicitly {@link casper.WaitingContinuationInfo.verify|verify} messages.
         * @param message WaitingContinuationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IWaitingContinuationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WaitingContinuationInfo message, length delimited. Does not implicitly {@link casper.WaitingContinuationInfo.verify|verify} messages.
         * @param message WaitingContinuationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IWaitingContinuationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WaitingContinuationInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WaitingContinuationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.WaitingContinuationInfo;

        /**
         * Decodes a WaitingContinuationInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WaitingContinuationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.WaitingContinuationInfo;

        /**
         * Verifies a WaitingContinuationInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WaitingContinuationInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WaitingContinuationInfo
         */
        public static fromObject(object: { [k: string]: any }): casper.WaitingContinuationInfo;

        /**
         * Creates a plain object from a WaitingContinuationInfo message. Also converts values to other types if specified.
         * @param message WaitingContinuationInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.WaitingContinuationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WaitingContinuationInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace v1. */
    namespace v1 {

        /** Represents a DeployService */
        class DeployService extends $protobuf.rpc.Service {

            /**
             * Constructs a new DeployService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DeployService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeployService;

            /**
             * Calls doDeploy.
             * @param request DeployDataProto message or plain object
             * @param callback Node-style callback called with the error, if any, and DeployResponse
             */
            public doDeploy(request: casper.IDeployDataProto, callback: casper.v1.DeployService.doDeployCallback): void;

            /**
             * Calls doDeploy.
             * @param request DeployDataProto message or plain object
             * @returns Promise
             */
            public doDeploy(request: casper.IDeployDataProto): Promise<casper.v1.DeployResponse>;

            /**
             * Calls getBlock.
             * @param request BlockQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and BlockResponse
             */
            public getBlock(request: casper.IBlockQuery, callback: casper.v1.DeployService.getBlockCallback): void;

            /**
             * Calls getBlock.
             * @param request BlockQuery message or plain object
             * @returns Promise
             */
            public getBlock(request: casper.IBlockQuery): Promise<casper.v1.BlockResponse>;

            /**
             * Calls visualizeDag.
             * @param request VisualizeDagQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and VisualizeBlocksResponse
             */
            public visualizeDag(request: casper.IVisualizeDagQuery, callback: casper.v1.DeployService.visualizeDagCallback): void;

            /**
             * Calls visualizeDag.
             * @param request VisualizeDagQuery message or plain object
             * @returns Promise
             */
            public visualizeDag(request: casper.IVisualizeDagQuery): Promise<casper.v1.VisualizeBlocksResponse>;

            /**
             * Calls machineVerifiableDag.
             * @param request MachineVerifyQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and MachineVerifyResponse
             */
            public machineVerifiableDag(request: casper.IMachineVerifyQuery, callback: casper.v1.DeployService.machineVerifiableDagCallback): void;

            /**
             * Calls machineVerifiableDag.
             * @param request MachineVerifyQuery message or plain object
             * @returns Promise
             */
            public machineVerifiableDag(request: casper.IMachineVerifyQuery): Promise<casper.v1.MachineVerifyResponse>;

            /**
             * Calls showMainChain.
             * @param request BlocksQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and BlockInfoResponse
             */
            public showMainChain(request: casper.IBlocksQuery, callback: casper.v1.DeployService.showMainChainCallback): void;

            /**
             * Calls showMainChain.
             * @param request BlocksQuery message or plain object
             * @returns Promise
             */
            public showMainChain(request: casper.IBlocksQuery): Promise<casper.v1.BlockInfoResponse>;

            /**
             * Calls getBlocks.
             * @param request BlocksQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and BlockInfoResponse
             */
            public getBlocks(request: casper.IBlocksQuery, callback: casper.v1.DeployService.getBlocksCallback): void;

            /**
             * Calls getBlocks.
             * @param request BlocksQuery message or plain object
             * @returns Promise
             */
            public getBlocks(request: casper.IBlocksQuery): Promise<casper.v1.BlockInfoResponse>;

            /**
             * Calls listenForDataAtName.
             * @param request DataAtNameQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ListeningNameDataResponse
             */
            public listenForDataAtName(request: casper.IDataAtNameQuery, callback: casper.v1.DeployService.listenForDataAtNameCallback): void;

            /**
             * Calls listenForDataAtName.
             * @param request DataAtNameQuery message or plain object
             * @returns Promise
             */
            public listenForDataAtName(request: casper.IDataAtNameQuery): Promise<casper.v1.ListeningNameDataResponse>;

            /**
             * Calls listenForContinuationAtName.
             * @param request ContinuationAtNameQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ContinuationAtNameResponse
             */
            public listenForContinuationAtName(request: casper.IContinuationAtNameQuery, callback: casper.v1.DeployService.listenForContinuationAtNameCallback): void;

            /**
             * Calls listenForContinuationAtName.
             * @param request ContinuationAtNameQuery message or plain object
             * @returns Promise
             */
            public listenForContinuationAtName(request: casper.IContinuationAtNameQuery): Promise<casper.v1.ContinuationAtNameResponse>;

            /**
             * Calls findDeploy.
             * @param request FindDeployQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and FindDeployResponse
             */
            public findDeploy(request: casper.IFindDeployQuery, callback: casper.v1.DeployService.findDeployCallback): void;

            /**
             * Calls findDeploy.
             * @param request FindDeployQuery message or plain object
             * @returns Promise
             */
            public findDeploy(request: casper.IFindDeployQuery): Promise<casper.v1.FindDeployResponse>;

            /**
             * Calls previewPrivateNames.
             * @param request PrivateNamePreviewQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and PrivateNamePreviewResponse
             */
            public previewPrivateNames(request: casper.IPrivateNamePreviewQuery, callback: casper.v1.DeployService.previewPrivateNamesCallback): void;

            /**
             * Calls previewPrivateNames.
             * @param request PrivateNamePreviewQuery message or plain object
             * @returns Promise
             */
            public previewPrivateNames(request: casper.IPrivateNamePreviewQuery): Promise<casper.v1.PrivateNamePreviewResponse>;

            /**
             * Calls lastFinalizedBlock.
             * @param request LastFinalizedBlockQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and LastFinalizedBlockResponse
             */
            public lastFinalizedBlock(request: casper.ILastFinalizedBlockQuery, callback: casper.v1.DeployService.lastFinalizedBlockCallback): void;

            /**
             * Calls lastFinalizedBlock.
             * @param request LastFinalizedBlockQuery message or plain object
             * @returns Promise
             */
            public lastFinalizedBlock(request: casper.ILastFinalizedBlockQuery): Promise<casper.v1.LastFinalizedBlockResponse>;

            /**
             * Calls isFinalized.
             * @param request IsFinalizedQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and IsFinalizedResponse
             */
            public isFinalized(request: casper.IIsFinalizedQuery, callback: casper.v1.DeployService.isFinalizedCallback): void;

            /**
             * Calls isFinalized.
             * @param request IsFinalizedQuery message or plain object
             * @returns Promise
             */
            public isFinalized(request: casper.IIsFinalizedQuery): Promise<casper.v1.IsFinalizedResponse>;
        }

        namespace DeployService {

            /**
             * Callback as used by {@link casper.v1.DeployService#doDeploy}.
             * @param error Error, if any
             * @param [response] DeployResponse
             */
            type doDeployCallback = (error: (Error|null), response?: casper.v1.DeployResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#getBlock}.
             * @param error Error, if any
             * @param [response] BlockResponse
             */
            type getBlockCallback = (error: (Error|null), response?: casper.v1.BlockResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#visualizeDag}.
             * @param error Error, if any
             * @param [response] VisualizeBlocksResponse
             */
            type visualizeDagCallback = (error: (Error|null), response?: casper.v1.VisualizeBlocksResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#machineVerifiableDag}.
             * @param error Error, if any
             * @param [response] MachineVerifyResponse
             */
            type machineVerifiableDagCallback = (error: (Error|null), response?: casper.v1.MachineVerifyResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#showMainChain}.
             * @param error Error, if any
             * @param [response] BlockInfoResponse
             */
            type showMainChainCallback = (error: (Error|null), response?: casper.v1.BlockInfoResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#getBlocks}.
             * @param error Error, if any
             * @param [response] BlockInfoResponse
             */
            type getBlocksCallback = (error: (Error|null), response?: casper.v1.BlockInfoResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#listenForDataAtName}.
             * @param error Error, if any
             * @param [response] ListeningNameDataResponse
             */
            type listenForDataAtNameCallback = (error: (Error|null), response?: casper.v1.ListeningNameDataResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#listenForContinuationAtName}.
             * @param error Error, if any
             * @param [response] ContinuationAtNameResponse
             */
            type listenForContinuationAtNameCallback = (error: (Error|null), response?: casper.v1.ContinuationAtNameResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#findDeploy}.
             * @param error Error, if any
             * @param [response] FindDeployResponse
             */
            type findDeployCallback = (error: (Error|null), response?: casper.v1.FindDeployResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#previewPrivateNames}.
             * @param error Error, if any
             * @param [response] PrivateNamePreviewResponse
             */
            type previewPrivateNamesCallback = (error: (Error|null), response?: casper.v1.PrivateNamePreviewResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#lastFinalizedBlock}.
             * @param error Error, if any
             * @param [response] LastFinalizedBlockResponse
             */
            type lastFinalizedBlockCallback = (error: (Error|null), response?: casper.v1.LastFinalizedBlockResponse) => void;

            /**
             * Callback as used by {@link casper.v1.DeployService#isFinalized}.
             * @param error Error, if any
             * @param [response] IsFinalizedResponse
             */
            type isFinalizedCallback = (error: (Error|null), response?: casper.v1.IsFinalizedResponse) => void;
        }

        /** Properties of a DeployResponse. */
        interface IDeployResponse {

            /** DeployResponse error */
            error?: (IServiceError|null);

            /** DeployResponse result */
            result?: (string|null);
        }

        /** Represents a DeployResponse. */
        class DeployResponse implements IDeployResponse {

            /**
             * Constructs a new DeployResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IDeployResponse);

            /** DeployResponse error. */
            public error?: (IServiceError|null);

            /** DeployResponse result. */
            public result: string;

            /** DeployResponse message. */
            public message?: ("error"|"result");

            /**
             * Creates a new DeployResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeployResponse instance
             */
            public static create(properties?: casper.v1.IDeployResponse): casper.v1.DeployResponse;

            /**
             * Encodes the specified DeployResponse message. Does not implicitly {@link casper.v1.DeployResponse.verify|verify} messages.
             * @param message DeployResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeployResponse message, length delimited. Does not implicitly {@link casper.v1.DeployResponse.verify|verify} messages.
             * @param message DeployResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeployResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeployResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.DeployResponse;

            /**
             * Decodes a DeployResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeployResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.DeployResponse;

            /**
             * Verifies a DeployResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeployResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeployResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.DeployResponse;

            /**
             * Creates a plain object from a DeployResponse message. Also converts values to other types if specified.
             * @param message DeployResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.DeployResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeployResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockResponse. */
        interface IBlockResponse {

            /** BlockResponse error */
            error?: (IServiceError|null);

            /** BlockResponse blockInfo */
            blockInfo?: (casper.IBlockInfo|null);
        }

        /** Represents a BlockResponse. */
        class BlockResponse implements IBlockResponse {

            /**
             * Constructs a new BlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IBlockResponse);

            /** BlockResponse error. */
            public error?: (IServiceError|null);

            /** BlockResponse blockInfo. */
            public blockInfo?: (casper.IBlockInfo|null);

            /** BlockResponse message. */
            public message?: ("error"|"blockInfo");

            /**
             * Creates a new BlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockResponse instance
             */
            public static create(properties?: casper.v1.IBlockResponse): casper.v1.BlockResponse;

            /**
             * Encodes the specified BlockResponse message. Does not implicitly {@link casper.v1.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockResponse message, length delimited. Does not implicitly {@link casper.v1.BlockResponse.verify|verify} messages.
             * @param message BlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.BlockResponse;

            /**
             * Decodes a BlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.BlockResponse;

            /**
             * Verifies a BlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.BlockResponse;

            /**
             * Creates a plain object from a BlockResponse message. Also converts values to other types if specified.
             * @param message BlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.BlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VisualizeBlocksResponse. */
        interface IVisualizeBlocksResponse {

            /** VisualizeBlocksResponse error */
            error?: (IServiceError|null);

            /** VisualizeBlocksResponse content */
            content?: (string|null);
        }

        /** Represents a VisualizeBlocksResponse. */
        class VisualizeBlocksResponse implements IVisualizeBlocksResponse {

            /**
             * Constructs a new VisualizeBlocksResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IVisualizeBlocksResponse);

            /** VisualizeBlocksResponse error. */
            public error?: (IServiceError|null);

            /** VisualizeBlocksResponse content. */
            public content: string;

            /** VisualizeBlocksResponse message. */
            public message?: ("error"|"content");

            /**
             * Creates a new VisualizeBlocksResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VisualizeBlocksResponse instance
             */
            public static create(properties?: casper.v1.IVisualizeBlocksResponse): casper.v1.VisualizeBlocksResponse;

            /**
             * Encodes the specified VisualizeBlocksResponse message. Does not implicitly {@link casper.v1.VisualizeBlocksResponse.verify|verify} messages.
             * @param message VisualizeBlocksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IVisualizeBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VisualizeBlocksResponse message, length delimited. Does not implicitly {@link casper.v1.VisualizeBlocksResponse.verify|verify} messages.
             * @param message VisualizeBlocksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IVisualizeBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VisualizeBlocksResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VisualizeBlocksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.VisualizeBlocksResponse;

            /**
             * Decodes a VisualizeBlocksResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VisualizeBlocksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.VisualizeBlocksResponse;

            /**
             * Verifies a VisualizeBlocksResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VisualizeBlocksResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VisualizeBlocksResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.VisualizeBlocksResponse;

            /**
             * Creates a plain object from a VisualizeBlocksResponse message. Also converts values to other types if specified.
             * @param message VisualizeBlocksResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.VisualizeBlocksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VisualizeBlocksResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MachineVerifyResponse. */
        interface IMachineVerifyResponse {

            /** MachineVerifyResponse error */
            error?: (IServiceError|null);

            /** MachineVerifyResponse content */
            content?: (string|null);
        }

        /** Represents a MachineVerifyResponse. */
        class MachineVerifyResponse implements IMachineVerifyResponse {

            /**
             * Constructs a new MachineVerifyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IMachineVerifyResponse);

            /** MachineVerifyResponse error. */
            public error?: (IServiceError|null);

            /** MachineVerifyResponse content. */
            public content: string;

            /** MachineVerifyResponse message. */
            public message?: ("error"|"content");

            /**
             * Creates a new MachineVerifyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MachineVerifyResponse instance
             */
            public static create(properties?: casper.v1.IMachineVerifyResponse): casper.v1.MachineVerifyResponse;

            /**
             * Encodes the specified MachineVerifyResponse message. Does not implicitly {@link casper.v1.MachineVerifyResponse.verify|verify} messages.
             * @param message MachineVerifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IMachineVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MachineVerifyResponse message, length delimited. Does not implicitly {@link casper.v1.MachineVerifyResponse.verify|verify} messages.
             * @param message MachineVerifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IMachineVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MachineVerifyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MachineVerifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.MachineVerifyResponse;

            /**
             * Decodes a MachineVerifyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MachineVerifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.MachineVerifyResponse;

            /**
             * Verifies a MachineVerifyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MachineVerifyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MachineVerifyResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.MachineVerifyResponse;

            /**
             * Creates a plain object from a MachineVerifyResponse message. Also converts values to other types if specified.
             * @param message MachineVerifyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.MachineVerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MachineVerifyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockInfoResponse. */
        interface IBlockInfoResponse {

            /** BlockInfoResponse error */
            error?: (IServiceError|null);

            /** BlockInfoResponse blockInfo */
            blockInfo?: (casper.ILightBlockInfo|null);
        }

        /** Represents a BlockInfoResponse. */
        class BlockInfoResponse implements IBlockInfoResponse {

            /**
             * Constructs a new BlockInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IBlockInfoResponse);

            /** BlockInfoResponse error. */
            public error?: (IServiceError|null);

            /** BlockInfoResponse blockInfo. */
            public blockInfo?: (casper.ILightBlockInfo|null);

            /** BlockInfoResponse message. */
            public message?: ("error"|"blockInfo");

            /**
             * Creates a new BlockInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlockInfoResponse instance
             */
            public static create(properties?: casper.v1.IBlockInfoResponse): casper.v1.BlockInfoResponse;

            /**
             * Encodes the specified BlockInfoResponse message. Does not implicitly {@link casper.v1.BlockInfoResponse.verify|verify} messages.
             * @param message BlockInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IBlockInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockInfoResponse message, length delimited. Does not implicitly {@link casper.v1.BlockInfoResponse.verify|verify} messages.
             * @param message BlockInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IBlockInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.BlockInfoResponse;

            /**
             * Decodes a BlockInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.BlockInfoResponse;

            /**
             * Verifies a BlockInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.BlockInfoResponse;

            /**
             * Creates a plain object from a BlockInfoResponse message. Also converts values to other types if specified.
             * @param message BlockInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.BlockInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListeningNameDataResponse. */
        interface IListeningNameDataResponse {

            /** ListeningNameDataResponse error */
            error?: (IServiceError|null);

            /** ListeningNameDataResponse payload */
            payload?: (casper.v1.IListeningNameDataPayload|null);
        }

        /** Represents a ListeningNameDataResponse. */
        class ListeningNameDataResponse implements IListeningNameDataResponse {

            /**
             * Constructs a new ListeningNameDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IListeningNameDataResponse);

            /** ListeningNameDataResponse error. */
            public error?: (IServiceError|null);

            /** ListeningNameDataResponse payload. */
            public payload?: (casper.v1.IListeningNameDataPayload|null);

            /** ListeningNameDataResponse message. */
            public message?: ("error"|"payload");

            /**
             * Creates a new ListeningNameDataResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListeningNameDataResponse instance
             */
            public static create(properties?: casper.v1.IListeningNameDataResponse): casper.v1.ListeningNameDataResponse;

            /**
             * Encodes the specified ListeningNameDataResponse message. Does not implicitly {@link casper.v1.ListeningNameDataResponse.verify|verify} messages.
             * @param message ListeningNameDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IListeningNameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListeningNameDataResponse message, length delimited. Does not implicitly {@link casper.v1.ListeningNameDataResponse.verify|verify} messages.
             * @param message ListeningNameDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IListeningNameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListeningNameDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListeningNameDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.ListeningNameDataResponse;

            /**
             * Decodes a ListeningNameDataResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListeningNameDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.ListeningNameDataResponse;

            /**
             * Verifies a ListeningNameDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListeningNameDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListeningNameDataResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.ListeningNameDataResponse;

            /**
             * Creates a plain object from a ListeningNameDataResponse message. Also converts values to other types if specified.
             * @param message ListeningNameDataResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.ListeningNameDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListeningNameDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListeningNameDataPayload. */
        interface IListeningNameDataPayload {

            /** ListeningNameDataPayload blockInfo */
            blockInfo?: (casper.IDataWithBlockInfo[]|null);

            /** ListeningNameDataPayload length */
            length?: (number|null);
        }

        /** Represents a ListeningNameDataPayload. */
        class ListeningNameDataPayload implements IListeningNameDataPayload {

            /**
             * Constructs a new ListeningNameDataPayload.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IListeningNameDataPayload);

            /** ListeningNameDataPayload blockInfo. */
            public blockInfo: casper.IDataWithBlockInfo[];

            /** ListeningNameDataPayload length. */
            public length: number;

            /**
             * Creates a new ListeningNameDataPayload instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListeningNameDataPayload instance
             */
            public static create(properties?: casper.v1.IListeningNameDataPayload): casper.v1.ListeningNameDataPayload;

            /**
             * Encodes the specified ListeningNameDataPayload message. Does not implicitly {@link casper.v1.ListeningNameDataPayload.verify|verify} messages.
             * @param message ListeningNameDataPayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IListeningNameDataPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListeningNameDataPayload message, length delimited. Does not implicitly {@link casper.v1.ListeningNameDataPayload.verify|verify} messages.
             * @param message ListeningNameDataPayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IListeningNameDataPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListeningNameDataPayload message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListeningNameDataPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.ListeningNameDataPayload;

            /**
             * Decodes a ListeningNameDataPayload message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListeningNameDataPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.ListeningNameDataPayload;

            /**
             * Verifies a ListeningNameDataPayload message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListeningNameDataPayload message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListeningNameDataPayload
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.ListeningNameDataPayload;

            /**
             * Creates a plain object from a ListeningNameDataPayload message. Also converts values to other types if specified.
             * @param message ListeningNameDataPayload
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.ListeningNameDataPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListeningNameDataPayload to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContinuationAtNameResponse. */
        interface IContinuationAtNameResponse {

            /** ContinuationAtNameResponse error */
            error?: (IServiceError|null);

            /** ContinuationAtNameResponse payload */
            payload?: (casper.v1.IContinuationAtNamePayload|null);
        }

        /** Represents a ContinuationAtNameResponse. */
        class ContinuationAtNameResponse implements IContinuationAtNameResponse {

            /**
             * Constructs a new ContinuationAtNameResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IContinuationAtNameResponse);

            /** ContinuationAtNameResponse error. */
            public error?: (IServiceError|null);

            /** ContinuationAtNameResponse payload. */
            public payload?: (casper.v1.IContinuationAtNamePayload|null);

            /** ContinuationAtNameResponse message. */
            public message?: ("error"|"payload");

            /**
             * Creates a new ContinuationAtNameResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContinuationAtNameResponse instance
             */
            public static create(properties?: casper.v1.IContinuationAtNameResponse): casper.v1.ContinuationAtNameResponse;

            /**
             * Encodes the specified ContinuationAtNameResponse message. Does not implicitly {@link casper.v1.ContinuationAtNameResponse.verify|verify} messages.
             * @param message ContinuationAtNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IContinuationAtNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContinuationAtNameResponse message, length delimited. Does not implicitly {@link casper.v1.ContinuationAtNameResponse.verify|verify} messages.
             * @param message ContinuationAtNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IContinuationAtNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContinuationAtNameResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContinuationAtNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.ContinuationAtNameResponse;

            /**
             * Decodes a ContinuationAtNameResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContinuationAtNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.ContinuationAtNameResponse;

            /**
             * Verifies a ContinuationAtNameResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContinuationAtNameResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContinuationAtNameResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.ContinuationAtNameResponse;

            /**
             * Creates a plain object from a ContinuationAtNameResponse message. Also converts values to other types if specified.
             * @param message ContinuationAtNameResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.ContinuationAtNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContinuationAtNameResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContinuationAtNamePayload. */
        interface IContinuationAtNamePayload {

            /** ContinuationAtNamePayload blockResults */
            blockResults?: (casper.IContinuationsWithBlockInfo[]|null);

            /** ContinuationAtNamePayload length */
            length?: (number|null);
        }

        /** Represents a ContinuationAtNamePayload. */
        class ContinuationAtNamePayload implements IContinuationAtNamePayload {

            /**
             * Constructs a new ContinuationAtNamePayload.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IContinuationAtNamePayload);

            /** ContinuationAtNamePayload blockResults. */
            public blockResults: casper.IContinuationsWithBlockInfo[];

            /** ContinuationAtNamePayload length. */
            public length: number;

            /**
             * Creates a new ContinuationAtNamePayload instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContinuationAtNamePayload instance
             */
            public static create(properties?: casper.v1.IContinuationAtNamePayload): casper.v1.ContinuationAtNamePayload;

            /**
             * Encodes the specified ContinuationAtNamePayload message. Does not implicitly {@link casper.v1.ContinuationAtNamePayload.verify|verify} messages.
             * @param message ContinuationAtNamePayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IContinuationAtNamePayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContinuationAtNamePayload message, length delimited. Does not implicitly {@link casper.v1.ContinuationAtNamePayload.verify|verify} messages.
             * @param message ContinuationAtNamePayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IContinuationAtNamePayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContinuationAtNamePayload message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContinuationAtNamePayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.ContinuationAtNamePayload;

            /**
             * Decodes a ContinuationAtNamePayload message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContinuationAtNamePayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.ContinuationAtNamePayload;

            /**
             * Verifies a ContinuationAtNamePayload message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContinuationAtNamePayload message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContinuationAtNamePayload
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.ContinuationAtNamePayload;

            /**
             * Creates a plain object from a ContinuationAtNamePayload message. Also converts values to other types if specified.
             * @param message ContinuationAtNamePayload
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.ContinuationAtNamePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContinuationAtNamePayload to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FindDeployResponse. */
        interface IFindDeployResponse {

            /** FindDeployResponse error */
            error?: (IServiceError|null);

            /** FindDeployResponse blockInfo */
            blockInfo?: (casper.ILightBlockInfo|null);
        }

        /** Represents a FindDeployResponse. */
        class FindDeployResponse implements IFindDeployResponse {

            /**
             * Constructs a new FindDeployResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IFindDeployResponse);

            /** FindDeployResponse error. */
            public error?: (IServiceError|null);

            /** FindDeployResponse blockInfo. */
            public blockInfo?: (casper.ILightBlockInfo|null);

            /** FindDeployResponse message. */
            public message?: ("error"|"blockInfo");

            /**
             * Creates a new FindDeployResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FindDeployResponse instance
             */
            public static create(properties?: casper.v1.IFindDeployResponse): casper.v1.FindDeployResponse;

            /**
             * Encodes the specified FindDeployResponse message. Does not implicitly {@link casper.v1.FindDeployResponse.verify|verify} messages.
             * @param message FindDeployResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IFindDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FindDeployResponse message, length delimited. Does not implicitly {@link casper.v1.FindDeployResponse.verify|verify} messages.
             * @param message FindDeployResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IFindDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FindDeployResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FindDeployResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.FindDeployResponse;

            /**
             * Decodes a FindDeployResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FindDeployResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.FindDeployResponse;

            /**
             * Verifies a FindDeployResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FindDeployResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FindDeployResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.FindDeployResponse;

            /**
             * Creates a plain object from a FindDeployResponse message. Also converts values to other types if specified.
             * @param message FindDeployResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.FindDeployResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FindDeployResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrivateNamePreviewResponse. */
        interface IPrivateNamePreviewResponse {

            /** PrivateNamePreviewResponse error */
            error?: (IServiceError|null);

            /** PrivateNamePreviewResponse payload */
            payload?: (casper.v1.IPrivateNamePreviewPayload|null);
        }

        /** Represents a PrivateNamePreviewResponse. */
        class PrivateNamePreviewResponse implements IPrivateNamePreviewResponse {

            /**
             * Constructs a new PrivateNamePreviewResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IPrivateNamePreviewResponse);

            /** PrivateNamePreviewResponse error. */
            public error?: (IServiceError|null);

            /** PrivateNamePreviewResponse payload. */
            public payload?: (casper.v1.IPrivateNamePreviewPayload|null);

            /** PrivateNamePreviewResponse message. */
            public message?: ("error"|"payload");

            /**
             * Creates a new PrivateNamePreviewResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivateNamePreviewResponse instance
             */
            public static create(properties?: casper.v1.IPrivateNamePreviewResponse): casper.v1.PrivateNamePreviewResponse;

            /**
             * Encodes the specified PrivateNamePreviewResponse message. Does not implicitly {@link casper.v1.PrivateNamePreviewResponse.verify|verify} messages.
             * @param message PrivateNamePreviewResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IPrivateNamePreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivateNamePreviewResponse message, length delimited. Does not implicitly {@link casper.v1.PrivateNamePreviewResponse.verify|verify} messages.
             * @param message PrivateNamePreviewResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IPrivateNamePreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivateNamePreviewResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrivateNamePreviewResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.PrivateNamePreviewResponse;

            /**
             * Decodes a PrivateNamePreviewResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrivateNamePreviewResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.PrivateNamePreviewResponse;

            /**
             * Verifies a PrivateNamePreviewResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivateNamePreviewResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivateNamePreviewResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.PrivateNamePreviewResponse;

            /**
             * Creates a plain object from a PrivateNamePreviewResponse message. Also converts values to other types if specified.
             * @param message PrivateNamePreviewResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.PrivateNamePreviewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivateNamePreviewResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrivateNamePreviewPayload. */
        interface IPrivateNamePreviewPayload {

            /** PrivateNamePreviewPayload ids */
            ids?: (Uint8Array[]|null);
        }

        /** Represents a PrivateNamePreviewPayload. */
        class PrivateNamePreviewPayload implements IPrivateNamePreviewPayload {

            /**
             * Constructs a new PrivateNamePreviewPayload.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IPrivateNamePreviewPayload);

            /** PrivateNamePreviewPayload ids. */
            public ids: Uint8Array[];

            /**
             * Creates a new PrivateNamePreviewPayload instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrivateNamePreviewPayload instance
             */
            public static create(properties?: casper.v1.IPrivateNamePreviewPayload): casper.v1.PrivateNamePreviewPayload;

            /**
             * Encodes the specified PrivateNamePreviewPayload message. Does not implicitly {@link casper.v1.PrivateNamePreviewPayload.verify|verify} messages.
             * @param message PrivateNamePreviewPayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IPrivateNamePreviewPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivateNamePreviewPayload message, length delimited. Does not implicitly {@link casper.v1.PrivateNamePreviewPayload.verify|verify} messages.
             * @param message PrivateNamePreviewPayload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IPrivateNamePreviewPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivateNamePreviewPayload message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrivateNamePreviewPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.PrivateNamePreviewPayload;

            /**
             * Decodes a PrivateNamePreviewPayload message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrivateNamePreviewPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.PrivateNamePreviewPayload;

            /**
             * Verifies a PrivateNamePreviewPayload message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivateNamePreviewPayload message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivateNamePreviewPayload
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.PrivateNamePreviewPayload;

            /**
             * Creates a plain object from a PrivateNamePreviewPayload message. Also converts values to other types if specified.
             * @param message PrivateNamePreviewPayload
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.PrivateNamePreviewPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivateNamePreviewPayload to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastFinalizedBlockResponse. */
        interface ILastFinalizedBlockResponse {

            /** LastFinalizedBlockResponse error */
            error?: (IServiceError|null);

            /** LastFinalizedBlockResponse blockInfo */
            blockInfo?: (casper.IBlockInfo|null);
        }

        /** Represents a LastFinalizedBlockResponse. */
        class LastFinalizedBlockResponse implements ILastFinalizedBlockResponse {

            /**
             * Constructs a new LastFinalizedBlockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.ILastFinalizedBlockResponse);

            /** LastFinalizedBlockResponse error. */
            public error?: (IServiceError|null);

            /** LastFinalizedBlockResponse blockInfo. */
            public blockInfo?: (casper.IBlockInfo|null);

            /** LastFinalizedBlockResponse message. */
            public message?: ("error"|"blockInfo");

            /**
             * Creates a new LastFinalizedBlockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastFinalizedBlockResponse instance
             */
            public static create(properties?: casper.v1.ILastFinalizedBlockResponse): casper.v1.LastFinalizedBlockResponse;

            /**
             * Encodes the specified LastFinalizedBlockResponse message. Does not implicitly {@link casper.v1.LastFinalizedBlockResponse.verify|verify} messages.
             * @param message LastFinalizedBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.ILastFinalizedBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastFinalizedBlockResponse message, length delimited. Does not implicitly {@link casper.v1.LastFinalizedBlockResponse.verify|verify} messages.
             * @param message LastFinalizedBlockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.ILastFinalizedBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastFinalizedBlockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastFinalizedBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.LastFinalizedBlockResponse;

            /**
             * Decodes a LastFinalizedBlockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastFinalizedBlockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.LastFinalizedBlockResponse;

            /**
             * Verifies a LastFinalizedBlockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastFinalizedBlockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastFinalizedBlockResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.LastFinalizedBlockResponse;

            /**
             * Creates a plain object from a LastFinalizedBlockResponse message. Also converts values to other types if specified.
             * @param message LastFinalizedBlockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.LastFinalizedBlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastFinalizedBlockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IsFinalizedResponse. */
        interface IIsFinalizedResponse {

            /** IsFinalizedResponse error */
            error?: (IServiceError|null);

            /** IsFinalizedResponse isFinalized */
            isFinalized?: (boolean|null);
        }

        /** Represents an IsFinalizedResponse. */
        class IsFinalizedResponse implements IIsFinalizedResponse {

            /**
             * Constructs a new IsFinalizedResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IIsFinalizedResponse);

            /** IsFinalizedResponse error. */
            public error?: (IServiceError|null);

            /** IsFinalizedResponse isFinalized. */
            public isFinalized: boolean;

            /** IsFinalizedResponse message. */
            public message?: ("error"|"isFinalized");

            /**
             * Creates a new IsFinalizedResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsFinalizedResponse instance
             */
            public static create(properties?: casper.v1.IIsFinalizedResponse): casper.v1.IsFinalizedResponse;

            /**
             * Encodes the specified IsFinalizedResponse message. Does not implicitly {@link casper.v1.IsFinalizedResponse.verify|verify} messages.
             * @param message IsFinalizedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IIsFinalizedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IsFinalizedResponse message, length delimited. Does not implicitly {@link casper.v1.IsFinalizedResponse.verify|verify} messages.
             * @param message IsFinalizedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IIsFinalizedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsFinalizedResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsFinalizedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.IsFinalizedResponse;

            /**
             * Decodes an IsFinalizedResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IsFinalizedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.IsFinalizedResponse;

            /**
             * Verifies an IsFinalizedResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IsFinalizedResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IsFinalizedResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.IsFinalizedResponse;

            /**
             * Creates a plain object from an IsFinalizedResponse message. Also converts values to other types if specified.
             * @param message IsFinalizedResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.IsFinalizedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IsFinalizedResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ProposeService */
        class ProposeService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ProposeService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ProposeService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProposeService;

            /**
             * Calls propose.
             * @param request PrintUnmatchedSendsQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ProposeResponse
             */
            public propose(request: casper.IPrintUnmatchedSendsQuery, callback: casper.v1.ProposeService.proposeCallback): void;

            /**
             * Calls propose.
             * @param request PrintUnmatchedSendsQuery message or plain object
             * @returns Promise
             */
            public propose(request: casper.IPrintUnmatchedSendsQuery): Promise<casper.v1.ProposeResponse>;
        }

        namespace ProposeService {

            /**
             * Callback as used by {@link casper.v1.ProposeService#propose}.
             * @param error Error, if any
             * @param [response] ProposeResponse
             */
            type proposeCallback = (error: (Error|null), response?: casper.v1.ProposeResponse) => void;
        }

        /** Properties of a ProposeResponse. */
        interface IProposeResponse {

            /** ProposeResponse error */
            error?: (IServiceError|null);

            /** ProposeResponse result */
            result?: (string|null);
        }

        /** Represents a ProposeResponse. */
        class ProposeResponse implements IProposeResponse {

            /**
             * Constructs a new ProposeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: casper.v1.IProposeResponse);

            /** ProposeResponse error. */
            public error?: (IServiceError|null);

            /** ProposeResponse result. */
            public result: string;

            /** ProposeResponse message. */
            public message?: ("error"|"result");

            /**
             * Creates a new ProposeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProposeResponse instance
             */
            public static create(properties?: casper.v1.IProposeResponse): casper.v1.ProposeResponse;

            /**
             * Encodes the specified ProposeResponse message. Does not implicitly {@link casper.v1.ProposeResponse.verify|verify} messages.
             * @param message ProposeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: casper.v1.IProposeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProposeResponse message, length delimited. Does not implicitly {@link casper.v1.ProposeResponse.verify|verify} messages.
             * @param message ProposeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: casper.v1.IProposeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProposeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProposeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.v1.ProposeResponse;

            /**
             * Decodes a ProposeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProposeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.v1.ProposeResponse;

            /**
             * Verifies a ProposeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProposeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProposeResponse
             */
            public static fromObject(object: { [k: string]: any }): casper.v1.ProposeResponse;

            /**
             * Creates a plain object from a ProposeResponse message. Also converts values to other types if specified.
             * @param message ProposeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: casper.v1.ProposeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProposeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PrintUnmatchedSendsQuery. */
    interface IPrintUnmatchedSendsQuery {

        /** PrintUnmatchedSendsQuery printUnmatchedSends */
        printUnmatchedSends?: (boolean|null);
    }

    /** Represents a PrintUnmatchedSendsQuery. */
    class PrintUnmatchedSendsQuery implements IPrintUnmatchedSendsQuery {

        /**
         * Constructs a new PrintUnmatchedSendsQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: casper.IPrintUnmatchedSendsQuery);

        /** PrintUnmatchedSendsQuery printUnmatchedSends. */
        public printUnmatchedSends: boolean;

        /**
         * Creates a new PrintUnmatchedSendsQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrintUnmatchedSendsQuery instance
         */
        public static create(properties?: casper.IPrintUnmatchedSendsQuery): casper.PrintUnmatchedSendsQuery;

        /**
         * Encodes the specified PrintUnmatchedSendsQuery message. Does not implicitly {@link casper.PrintUnmatchedSendsQuery.verify|verify} messages.
         * @param message PrintUnmatchedSendsQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: casper.IPrintUnmatchedSendsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrintUnmatchedSendsQuery message, length delimited. Does not implicitly {@link casper.PrintUnmatchedSendsQuery.verify|verify} messages.
         * @param message PrintUnmatchedSendsQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: casper.IPrintUnmatchedSendsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrintUnmatchedSendsQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrintUnmatchedSendsQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): casper.PrintUnmatchedSendsQuery;

        /**
         * Decodes a PrintUnmatchedSendsQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrintUnmatchedSendsQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): casper.PrintUnmatchedSendsQuery;

        /**
         * Verifies a PrintUnmatchedSendsQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrintUnmatchedSendsQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrintUnmatchedSendsQuery
         */
        public static fromObject(object: { [k: string]: any }): casper.PrintUnmatchedSendsQuery;

        /**
         * Creates a plain object from a PrintUnmatchedSendsQuery message. Also converts values to other types if specified.
         * @param message PrintUnmatchedSendsQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: casper.PrintUnmatchedSendsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrintUnmatchedSendsQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a Par. */
export interface IPar {

    /** Par sends */
    sends?: (ISend[]|null);

    /** Par receives */
    receives?: (IReceive[]|null);

    /** Par news */
    news?: (INew[]|null);

    /** Par exprs */
    exprs?: (IExpr[]|null);

    /** Par matches */
    matches?: (IMatch[]|null);

    /** Par unforgeables */
    unforgeables?: (IGUnforgeable[]|null);

    /** Par bundles */
    bundles?: (IBundle[]|null);

    /** Par connectives */
    connectives?: (IConnective[]|null);

    /** Par locallyFree */
    locallyFree?: (Uint8Array|null);

    /** Par connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/**
 * Rholang process
 *
 * For example, `@0!(1) | @2!(3) | for(x <- @0) { Nil }` has two sends
 * and one receive.
 *
 * The Nil process is a `Par` with no sends, receives, etc.
 */
export class Par implements IPar {

    /**
     * Constructs a new Par.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPar);

    /** Par sends. */
    public sends: ISend[];

    /** Par receives. */
    public receives: IReceive[];

    /** Par news. */
    public news: INew[];

    /** Par exprs. */
    public exprs: IExpr[];

    /** Par matches. */
    public matches: IMatch[];

    /** Par unforgeables. */
    public unforgeables: IGUnforgeable[];

    /** Par bundles. */
    public bundles: IBundle[];

    /** Par connectives. */
    public connectives: IConnective[];

    /** Par locallyFree. */
    public locallyFree: Uint8Array;

    /** Par connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new Par instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Par instance
     */
    public static create(properties?: IPar): Par;

    /**
     * Encodes the specified Par message. Does not implicitly {@link Par.verify|verify} messages.
     * @param message Par message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Par message, length delimited. Does not implicitly {@link Par.verify|verify} messages.
     * @param message Par message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Par message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Par;

    /**
     * Decodes a Par message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Par;

    /**
     * Verifies a Par message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Par message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Par
     */
    public static fromObject(object: { [k: string]: any }): Par;

    /**
     * Creates a plain object from a Par message. Also converts values to other types if specified.
     * @param message Par
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Par, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Par to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TaggedContinuation. */
export interface ITaggedContinuation {

    /** TaggedContinuation parBody */
    parBody?: (IParWithRandom|null);

    /** TaggedContinuation scalaBodyRef */
    scalaBodyRef?: (number|Long|null);
}

/** Either rholang code or code built in to the interpreter. */
export class TaggedContinuation implements ITaggedContinuation {

    /**
     * Constructs a new TaggedContinuation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaggedContinuation);

    /** TaggedContinuation parBody. */
    public parBody?: (IParWithRandom|null);

    /** TaggedContinuation scalaBodyRef. */
    public scalaBodyRef: (number|Long);

    /** TaggedContinuation taggedCont. */
    public taggedCont?: ("parBody"|"scalaBodyRef");

    /**
     * Creates a new TaggedContinuation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaggedContinuation instance
     */
    public static create(properties?: ITaggedContinuation): TaggedContinuation;

    /**
     * Encodes the specified TaggedContinuation message. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @param message TaggedContinuation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TaggedContinuation message, length delimited. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @param message TaggedContinuation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaggedContinuation;

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaggedContinuation;

    /**
     * Verifies a TaggedContinuation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TaggedContinuation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TaggedContinuation
     */
    public static fromObject(object: { [k: string]: any }): TaggedContinuation;

    /**
     * Creates a plain object from a TaggedContinuation message. Also converts values to other types if specified.
     * @param message TaggedContinuation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TaggedContinuation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TaggedContinuation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ParWithRandom. */
export interface IParWithRandom {

    /** ParWithRandom body */
    body?: (IPar|null);

    /** ParWithRandom randomState */
    randomState?: (Uint8Array|null);
}

/**
 * Rholang code along with the state of a split random number
 * generator for generating new unforgeable names.
 */
export class ParWithRandom implements IParWithRandom {

    /**
     * Constructs a new ParWithRandom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IParWithRandom);

    /** ParWithRandom body. */
    public body?: (IPar|null);

    /** ParWithRandom randomState. */
    public randomState: Uint8Array;

    /**
     * Creates a new ParWithRandom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ParWithRandom instance
     */
    public static create(properties?: IParWithRandom): ParWithRandom;

    /**
     * Encodes the specified ParWithRandom message. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @param message ParWithRandom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ParWithRandom message, length delimited. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @param message ParWithRandom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ParWithRandom;

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ParWithRandom;

    /**
     * Verifies a ParWithRandom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ParWithRandom
     */
    public static fromObject(object: { [k: string]: any }): ParWithRandom;

    /**
     * Creates a plain object from a ParWithRandom message. Also converts values to other types if specified.
     * @param message ParWithRandom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ParWithRandom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PCost. */
export interface IPCost {

    /** PCost cost */
    cost?: (number|Long|null);
}

/** Cost of the performed operations. */
export class PCost implements IPCost {

    /**
     * Constructs a new PCost.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPCost);

    /** PCost cost. */
    public cost: (number|Long);

    /**
     * Creates a new PCost instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PCost instance
     */
    public static create(properties?: IPCost): PCost;

    /**
     * Encodes the specified PCost message. Does not implicitly {@link PCost.verify|verify} messages.
     * @param message PCost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PCost message, length delimited. Does not implicitly {@link PCost.verify|verify} messages.
     * @param message PCost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PCost message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PCost;

    /**
     * Decodes a PCost message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PCost;

    /**
     * Verifies a PCost message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PCost message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PCost
     */
    public static fromObject(object: { [k: string]: any }): PCost;

    /**
     * Creates a plain object from a PCost message. Also converts values to other types if specified.
     * @param message PCost
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PCost, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PCost to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListParWithRandom. */
export interface IListParWithRandom {

    /** ListParWithRandom pars */
    pars?: (IPar[]|null);

    /** ListParWithRandom randomState */
    randomState?: (Uint8Array|null);
}

/** Represents a ListParWithRandom. */
export class ListParWithRandom implements IListParWithRandom {

    /**
     * Constructs a new ListParWithRandom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListParWithRandom);

    /** ListParWithRandom pars. */
    public pars: IPar[];

    /** ListParWithRandom randomState. */
    public randomState: Uint8Array;

    /**
     * Creates a new ListParWithRandom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListParWithRandom instance
     */
    public static create(properties?: IListParWithRandom): ListParWithRandom;

    /**
     * Encodes the specified ListParWithRandom message. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @param message ListParWithRandom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListParWithRandom message, length delimited. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @param message ListParWithRandom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListParWithRandom;

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListParWithRandom;

    /**
     * Verifies a ListParWithRandom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListParWithRandom
     */
    public static fromObject(object: { [k: string]: any }): ListParWithRandom;

    /**
     * Creates a plain object from a ListParWithRandom message. Also converts values to other types if specified.
     * @param message ListParWithRandom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListParWithRandom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Var. */
export interface IVar {

    /** Var boundVar */
    boundVar?: (number|null);

    /** Var freeVar */
    freeVar?: (number|null);

    /** Var wildcard */
    wildcard?: (Var.IWildcardMsg|null);
}

/** Represents a Var. */
export class Var implements IVar {

    /**
     * Constructs a new Var.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVar);

    /** Var boundVar. */
    public boundVar: number;

    /** Var freeVar. */
    public freeVar: number;

    /** Var wildcard. */
    public wildcard?: (Var.IWildcardMsg|null);

    /** Var varInstance. */
    public varInstance?: ("boundVar"|"freeVar"|"wildcard");

    /**
     * Creates a new Var instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Var instance
     */
    public static create(properties?: IVar): Var;

    /**
     * Encodes the specified Var message. Does not implicitly {@link Var.verify|verify} messages.
     * @param message Var message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Var message, length delimited. Does not implicitly {@link Var.verify|verify} messages.
     * @param message Var message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Var message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var;

    /**
     * Decodes a Var message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var;

    /**
     * Verifies a Var message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Var message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Var
     */
    public static fromObject(object: { [k: string]: any }): Var;

    /**
     * Creates a plain object from a Var message. Also converts values to other types if specified.
     * @param message Var
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Var, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Var to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Var {

    /** Properties of a WildcardMsg. */
    interface IWildcardMsg {
    }

    /** Represents a WildcardMsg. */
    class WildcardMsg implements IWildcardMsg {

        /**
         * Constructs a new WildcardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: Var.IWildcardMsg);

        /**
         * Creates a new WildcardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WildcardMsg instance
         */
        public static create(properties?: Var.IWildcardMsg): Var.WildcardMsg;

        /**
         * Encodes the specified WildcardMsg message. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @param message WildcardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WildcardMsg message, length delimited. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @param message WildcardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var.WildcardMsg;

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var.WildcardMsg;

        /**
         * Verifies a WildcardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WildcardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WildcardMsg
         */
        public static fromObject(object: { [k: string]: any }): Var.WildcardMsg;

        /**
         * Creates a plain object from a WildcardMsg message. Also converts values to other types if specified.
         * @param message WildcardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Var.WildcardMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WildcardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Bundle. */
export interface IBundle {

    /** Bundle body */
    body?: (IPar|null);

    /** Bundle writeFlag */
    writeFlag?: (boolean|null);

    /** Bundle readFlag */
    readFlag?: (boolean|null);
}

/**
 * Nothing can be received from a (quoted) bundle with `readFlag = false`.
 * Likeise nothing can be sent to a (quoted) bundle with `writeFlag = false`.
 *
 * If both flags are set to false, bundle allows only for equivalance check.
 */
export class Bundle implements IBundle {

    /**
     * Constructs a new Bundle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBundle);

    /** Bundle body. */
    public body?: (IPar|null);

    /** Bundle writeFlag. */
    public writeFlag: boolean;

    /** Bundle readFlag. */
    public readFlag: boolean;

    /**
     * Creates a new Bundle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bundle instance
     */
    public static create(properties?: IBundle): Bundle;

    /**
     * Encodes the specified Bundle message. Does not implicitly {@link Bundle.verify|verify} messages.
     * @param message Bundle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Bundle message, length delimited. Does not implicitly {@link Bundle.verify|verify} messages.
     * @param message Bundle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bundle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bundle;

    /**
     * Decodes a Bundle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bundle;

    /**
     * Verifies a Bundle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Bundle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bundle
     */
    public static fromObject(object: { [k: string]: any }): Bundle;

    /**
     * Creates a plain object from a Bundle message. Also converts values to other types if specified.
     * @param message Bundle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Bundle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Bundle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Send. */
export interface ISend {

    /** Send chan */
    chan?: (IPar|null);

    /** Send data */
    data?: (IPar[]|null);

    /** Send persistent */
    persistent?: (boolean|null);

    /** Send locallyFree */
    locallyFree?: (Uint8Array|null);

    /** Send connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/**
 * A send is written `chan!(data)` or `chan!!(data)` for a persistent send.
 *
 * Upon send, all free variables in data are substituted with their values.
 */
export class Send implements ISend {

    /**
     * Constructs a new Send.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISend);

    /** Send chan. */
    public chan?: (IPar|null);

    /** Send data. */
    public data: IPar[];

    /** Send persistent. */
    public persistent: boolean;

    /** Send locallyFree. */
    public locallyFree: Uint8Array;

    /** Send connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new Send instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Send instance
     */
    public static create(properties?: ISend): Send;

    /**
     * Encodes the specified Send message. Does not implicitly {@link Send.verify|verify} messages.
     * @param message Send message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Send message, length delimited. Does not implicitly {@link Send.verify|verify} messages.
     * @param message Send message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Send message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Send;

    /**
     * Decodes a Send message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Send;

    /**
     * Verifies a Send message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Send message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Send
     */
    public static fromObject(object: { [k: string]: any }): Send;

    /**
     * Creates a plain object from a Send message. Also converts values to other types if specified.
     * @param message Send
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Send, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Send to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReceiveBind. */
export interface IReceiveBind {

    /** ReceiveBind patterns */
    patterns?: (IPar[]|null);

    /** ReceiveBind source */
    source?: (IPar|null);

    /** ReceiveBind remainder */
    remainder?: (IVar|null);

    /** ReceiveBind freeCount */
    freeCount?: (number|null);
}

/** Represents a ReceiveBind. */
export class ReceiveBind implements IReceiveBind {

    /**
     * Constructs a new ReceiveBind.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveBind);

    /** ReceiveBind patterns. */
    public patterns: IPar[];

    /** ReceiveBind source. */
    public source?: (IPar|null);

    /** ReceiveBind remainder. */
    public remainder?: (IVar|null);

    /** ReceiveBind freeCount. */
    public freeCount: number;

    /**
     * Creates a new ReceiveBind instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveBind instance
     */
    public static create(properties?: IReceiveBind): ReceiveBind;

    /**
     * Encodes the specified ReceiveBind message. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @param message ReceiveBind message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReceiveBind message, length delimited. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @param message ReceiveBind message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveBind;

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveBind;

    /**
     * Verifies a ReceiveBind message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReceiveBind message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReceiveBind
     */
    public static fromObject(object: { [k: string]: any }): ReceiveBind;

    /**
     * Creates a plain object from a ReceiveBind message. Also converts values to other types if specified.
     * @param message ReceiveBind
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReceiveBind, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReceiveBind to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BindPattern. */
export interface IBindPattern {

    /** BindPattern patterns */
    patterns?: (IPar[]|null);

    /** BindPattern remainder */
    remainder?: (IVar|null);

    /** BindPattern freeCount */
    freeCount?: (number|null);
}

/** Represents a BindPattern. */
export class BindPattern implements IBindPattern {

    /**
     * Constructs a new BindPattern.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBindPattern);

    /** BindPattern patterns. */
    public patterns: IPar[];

    /** BindPattern remainder. */
    public remainder?: (IVar|null);

    /** BindPattern freeCount. */
    public freeCount: number;

    /**
     * Creates a new BindPattern instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BindPattern instance
     */
    public static create(properties?: IBindPattern): BindPattern;

    /**
     * Encodes the specified BindPattern message. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @param message BindPattern message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BindPattern message, length delimited. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @param message BindPattern message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BindPattern message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BindPattern;

    /**
     * Decodes a BindPattern message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BindPattern;

    /**
     * Verifies a BindPattern message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BindPattern message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BindPattern
     */
    public static fromObject(object: { [k: string]: any }): BindPattern;

    /**
     * Creates a plain object from a BindPattern message. Also converts values to other types if specified.
     * @param message BindPattern
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BindPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BindPattern to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListBindPatterns. */
export interface IListBindPatterns {

    /** ListBindPatterns patterns */
    patterns?: (IBindPattern[]|null);
}

/** Represents a ListBindPatterns. */
export class ListBindPatterns implements IListBindPatterns {

    /**
     * Constructs a new ListBindPatterns.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListBindPatterns);

    /** ListBindPatterns patterns. */
    public patterns: IBindPattern[];

    /**
     * Creates a new ListBindPatterns instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListBindPatterns instance
     */
    public static create(properties?: IListBindPatterns): ListBindPatterns;

    /**
     * Encodes the specified ListBindPatterns message. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @param message ListBindPatterns message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListBindPatterns message, length delimited. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @param message ListBindPatterns message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListBindPatterns;

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListBindPatterns;

    /**
     * Verifies a ListBindPatterns message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListBindPatterns message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListBindPatterns
     */
    public static fromObject(object: { [k: string]: any }): ListBindPatterns;

    /**
     * Creates a plain object from a ListBindPatterns message. Also converts values to other types if specified.
     * @param message ListBindPatterns
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListBindPatterns, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListBindPatterns to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Receive. */
export interface IReceive {

    /** Receive binds */
    binds?: (IReceiveBind[]|null);

    /** Receive body */
    body?: (IPar|null);

    /** Receive persistent */
    persistent?: (boolean|null);

    /** Receive peek */
    peek?: (boolean|null);

    /** Receive bindCount */
    bindCount?: (number|null);

    /** Receive locallyFree */
    locallyFree?: (Uint8Array|null);

    /** Receive connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/**
 * A receive is written `for(binds) { body }`
 * i.e. `for(patterns <- source) { body }`
 * or for a persistent recieve: `for(patterns <= source) { body }`.
 *
 * It's an error for free Variable to occur more than once in a pattern.
 */
export class Receive implements IReceive {

    /**
     * Constructs a new Receive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceive);

    /** Receive binds. */
    public binds: IReceiveBind[];

    /** Receive body. */
    public body?: (IPar|null);

    /** Receive persistent. */
    public persistent: boolean;

    /** Receive peek. */
    public peek: boolean;

    /** Receive bindCount. */
    public bindCount: number;

    /** Receive locallyFree. */
    public locallyFree: Uint8Array;

    /** Receive connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new Receive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Receive instance
     */
    public static create(properties?: IReceive): Receive;

    /**
     * Encodes the specified Receive message. Does not implicitly {@link Receive.verify|verify} messages.
     * @param message Receive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Receive message, length delimited. Does not implicitly {@link Receive.verify|verify} messages.
     * @param message Receive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Receive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Receive;

    /**
     * Decodes a Receive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Receive;

    /**
     * Verifies a Receive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Receive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Receive
     */
    public static fromObject(object: { [k: string]: any }): Receive;

    /**
     * Creates a plain object from a Receive message. Also converts values to other types if specified.
     * @param message Receive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Receive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Receive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a New. */
export interface INew {

    /** New bindCount */
    bindCount?: (number|null);

    /** New p */
    p?: (IPar|null);

    /** New uri */
    uri?: (string[]|null);

    /** New deployId */
    deployId?: (IDeployId|null);

    /** New deployerId */
    deployerId?: (IDeployerId|null);

    /** New locallyFree */
    locallyFree?: (Uint8Array|null);
}

/** Represents a New. */
export class New implements INew {

    /**
     * Constructs a new New.
     * @param [properties] Properties to set
     */
    constructor(properties?: INew);

    /** New bindCount. */
    public bindCount: number;

    /** New p. */
    public p?: (IPar|null);

    /** New uri. */
    public uri: string[];

    /** New deployId. */
    public deployId?: (IDeployId|null);

    /** New deployerId. */
    public deployerId?: (IDeployerId|null);

    /** New locallyFree. */
    public locallyFree: Uint8Array;

    /**
     * Creates a new New instance using the specified properties.
     * @param [properties] Properties to set
     * @returns New instance
     */
    public static create(properties?: INew): New;

    /**
     * Encodes the specified New message. Does not implicitly {@link New.verify|verify} messages.
     * @param message New message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified New message, length delimited. Does not implicitly {@link New.verify|verify} messages.
     * @param message New message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a New message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): New;

    /**
     * Decodes a New message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): New;

    /**
     * Verifies a New message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a New message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns New
     */
    public static fromObject(object: { [k: string]: any }): New;

    /**
     * Creates a plain object from a New message. Also converts values to other types if specified.
     * @param message New
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: New, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this New to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MatchCase. */
export interface IMatchCase {

    /** MatchCase pattern */
    pattern?: (IPar|null);

    /** MatchCase source */
    source?: (IPar|null);

    /** MatchCase freeCount */
    freeCount?: (number|null);
}

/** Represents a MatchCase. */
export class MatchCase implements IMatchCase {

    /**
     * Constructs a new MatchCase.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchCase);

    /** MatchCase pattern. */
    public pattern?: (IPar|null);

    /** MatchCase source. */
    public source?: (IPar|null);

    /** MatchCase freeCount. */
    public freeCount: number;

    /**
     * Creates a new MatchCase instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchCase instance
     */
    public static create(properties?: IMatchCase): MatchCase;

    /**
     * Encodes the specified MatchCase message. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @param message MatchCase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MatchCase message, length delimited. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @param message MatchCase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchCase message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchCase;

    /**
     * Decodes a MatchCase message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchCase;

    /**
     * Verifies a MatchCase message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MatchCase message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MatchCase
     */
    public static fromObject(object: { [k: string]: any }): MatchCase;

    /**
     * Creates a plain object from a MatchCase message. Also converts values to other types if specified.
     * @param message MatchCase
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MatchCase, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MatchCase to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Match. */
export interface IMatch {

    /** Match target */
    target?: (IPar|null);

    /** Match cases */
    cases?: (IMatchCase[]|null);

    /** Match locallyFree */
    locallyFree?: (Uint8Array|null);

    /** Match connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/** Represents a Match. */
export class Match implements IMatch {

    /**
     * Constructs a new Match.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatch);

    /** Match target. */
    public target?: (IPar|null);

    /** Match cases. */
    public cases: IMatchCase[];

    /** Match locallyFree. */
    public locallyFree: Uint8Array;

    /** Match connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new Match instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Match instance
     */
    public static create(properties?: IMatch): Match;

    /**
     * Encodes the specified Match message. Does not implicitly {@link Match.verify|verify} messages.
     * @param message Match message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Match message, length delimited. Does not implicitly {@link Match.verify|verify} messages.
     * @param message Match message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Match message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Match;

    /**
     * Decodes a Match message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Match;

    /**
     * Verifies a Match message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Match message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Match
     */
    public static fromObject(object: { [k: string]: any }): Match;

    /**
     * Creates a plain object from a Match message. Also converts values to other types if specified.
     * @param message Match
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Match, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Match to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Expr. */
export interface IExpr {

    /** Expr gBool */
    gBool?: (boolean|null);

    /** Expr gInt */
    gInt?: (number|Long|null);

    /** Expr gString */
    gString?: (string|null);

    /** Expr gUri */
    gUri?: (string|null);

    /** Expr gByteArray */
    gByteArray?: (Uint8Array|null);

    /** Expr eNotBody */
    eNotBody?: (IENot|null);

    /** Expr eNegBody */
    eNegBody?: (IENeg|null);

    /** Expr eMultBody */
    eMultBody?: (IEMult|null);

    /** Expr eDivBody */
    eDivBody?: (IEDiv|null);

    /** Expr ePlusBody */
    ePlusBody?: (IEPlus|null);

    /** Expr eMinusBody */
    eMinusBody?: (IEMinus|null);

    /** Expr eLtBody */
    eLtBody?: (IELt|null);

    /** Expr eLteBody */
    eLteBody?: (IELte|null);

    /** Expr eGtBody */
    eGtBody?: (IEGt|null);

    /** Expr eGteBody */
    eGteBody?: (IEGte|null);

    /** Expr eEqBody */
    eEqBody?: (IEEq|null);

    /** Expr eNeqBody */
    eNeqBody?: (IENeq|null);

    /** Expr eAndBody */
    eAndBody?: (IEAnd|null);

    /** Expr eOrBody */
    eOrBody?: (IEOr|null);

    /** Expr eVarBody */
    eVarBody?: (IEVar|null);

    /** Expr eListBody */
    eListBody?: (IEList|null);

    /** Expr eTupleBody */
    eTupleBody?: (IETuple|null);

    /** Expr eSetBody */
    eSetBody?: (IESet|null);

    /** Expr eMapBody */
    eMapBody?: (IEMap|null);

    /** Expr eMethodBody */
    eMethodBody?: (IEMethod|null);

    /** Expr eMatchesBody */
    eMatchesBody?: (IEMatches|null);

    /** Expr ePercentPercentBody */
    ePercentPercentBody?: (IEPercentPercent|null);

    /** Expr ePlusPlusBody */
    ePlusPlusBody?: (IEPlusPlus|null);

    /** Expr eMinusMinusBody */
    eMinusMinusBody?: (IEMinusMinus|null);

    /** Expr eModBody */
    eModBody?: (IEMod|null);
}

/** Represents an Expr. */
export class Expr implements IExpr {

    /**
     * Constructs a new Expr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExpr);

    /** Expr gBool. */
    public gBool: boolean;

    /** Expr gInt. */
    public gInt: (number|Long);

    /** Expr gString. */
    public gString: string;

    /** Expr gUri. */
    public gUri: string;

    /** Expr gByteArray. */
    public gByteArray: Uint8Array;

    /** Expr eNotBody. */
    public eNotBody?: (IENot|null);

    /** Expr eNegBody. */
    public eNegBody?: (IENeg|null);

    /** Expr eMultBody. */
    public eMultBody?: (IEMult|null);

    /** Expr eDivBody. */
    public eDivBody?: (IEDiv|null);

    /** Expr ePlusBody. */
    public ePlusBody?: (IEPlus|null);

    /** Expr eMinusBody. */
    public eMinusBody?: (IEMinus|null);

    /** Expr eLtBody. */
    public eLtBody?: (IELt|null);

    /** Expr eLteBody. */
    public eLteBody?: (IELte|null);

    /** Expr eGtBody. */
    public eGtBody?: (IEGt|null);

    /** Expr eGteBody. */
    public eGteBody?: (IEGte|null);

    /** Expr eEqBody. */
    public eEqBody?: (IEEq|null);

    /** Expr eNeqBody. */
    public eNeqBody?: (IENeq|null);

    /** Expr eAndBody. */
    public eAndBody?: (IEAnd|null);

    /** Expr eOrBody. */
    public eOrBody?: (IEOr|null);

    /** Expr eVarBody. */
    public eVarBody?: (IEVar|null);

    /** Expr eListBody. */
    public eListBody?: (IEList|null);

    /** Expr eTupleBody. */
    public eTupleBody?: (IETuple|null);

    /** Expr eSetBody. */
    public eSetBody?: (IESet|null);

    /** Expr eMapBody. */
    public eMapBody?: (IEMap|null);

    /** Expr eMethodBody. */
    public eMethodBody?: (IEMethod|null);

    /** Expr eMatchesBody. */
    public eMatchesBody?: (IEMatches|null);

    /** Expr ePercentPercentBody. */
    public ePercentPercentBody?: (IEPercentPercent|null);

    /** Expr ePlusPlusBody. */
    public ePlusPlusBody?: (IEPlusPlus|null);

    /** Expr eMinusMinusBody. */
    public eMinusMinusBody?: (IEMinusMinus|null);

    /** Expr eModBody. */
    public eModBody?: (IEMod|null);

    /** Expr exprInstance. */
    public exprInstance?: ("gBool"|"gInt"|"gString"|"gUri"|"gByteArray"|"eNotBody"|"eNegBody"|"eMultBody"|"eDivBody"|"ePlusBody"|"eMinusBody"|"eLtBody"|"eLteBody"|"eGtBody"|"eGteBody"|"eEqBody"|"eNeqBody"|"eAndBody"|"eOrBody"|"eVarBody"|"eListBody"|"eTupleBody"|"eSetBody"|"eMapBody"|"eMethodBody"|"eMatchesBody"|"ePercentPercentBody"|"ePlusPlusBody"|"eMinusMinusBody"|"eModBody");

    /**
     * Creates a new Expr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Expr instance
     */
    public static create(properties?: IExpr): Expr;

    /**
     * Encodes the specified Expr message. Does not implicitly {@link Expr.verify|verify} messages.
     * @param message Expr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Expr message, length delimited. Does not implicitly {@link Expr.verify|verify} messages.
     * @param message Expr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Expr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Expr;

    /**
     * Decodes an Expr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Expr;

    /**
     * Verifies an Expr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Expr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Expr
     */
    public static fromObject(object: { [k: string]: any }): Expr;

    /**
     * Creates a plain object from an Expr message. Also converts values to other types if specified.
     * @param message Expr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Expr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EList. */
export interface IEList {

    /** EList ps */
    ps?: (IPar[]|null);

    /** EList locallyFree */
    locallyFree?: (Uint8Array|null);

    /** EList connectiveUsed */
    connectiveUsed?: (boolean|null);

    /** EList remainder */
    remainder?: (IVar|null);
}

/** Represents a EList. */
export class EList implements IEList {

    /**
     * Constructs a new EList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEList);

    /** EList ps. */
    public ps: IPar[];

    /** EList locallyFree. */
    public locallyFree: Uint8Array;

    /** EList connectiveUsed. */
    public connectiveUsed: boolean;

    /** EList remainder. */
    public remainder?: (IVar|null);

    /**
     * Creates a new EList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EList instance
     */
    public static create(properties?: IEList): EList;

    /**
     * Encodes the specified EList message. Does not implicitly {@link EList.verify|verify} messages.
     * @param message EList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EList message, length delimited. Does not implicitly {@link EList.verify|verify} messages.
     * @param message EList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EList;

    /**
     * Decodes a EList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EList;

    /**
     * Verifies a EList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EList
     */
    public static fromObject(object: { [k: string]: any }): EList;

    /**
     * Creates a plain object from a EList message. Also converts values to other types if specified.
     * @param message EList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ETuple. */
export interface IETuple {

    /** ETuple ps */
    ps?: (IPar[]|null);

    /** ETuple locallyFree */
    locallyFree?: (Uint8Array|null);

    /** ETuple connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/** Represents a ETuple. */
export class ETuple implements IETuple {

    /**
     * Constructs a new ETuple.
     * @param [properties] Properties to set
     */
    constructor(properties?: IETuple);

    /** ETuple ps. */
    public ps: IPar[];

    /** ETuple locallyFree. */
    public locallyFree: Uint8Array;

    /** ETuple connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new ETuple instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ETuple instance
     */
    public static create(properties?: IETuple): ETuple;

    /**
     * Encodes the specified ETuple message. Does not implicitly {@link ETuple.verify|verify} messages.
     * @param message ETuple message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ETuple message, length delimited. Does not implicitly {@link ETuple.verify|verify} messages.
     * @param message ETuple message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ETuple message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ETuple;

    /**
     * Decodes a ETuple message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ETuple;

    /**
     * Verifies a ETuple message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ETuple message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ETuple
     */
    public static fromObject(object: { [k: string]: any }): ETuple;

    /**
     * Creates a plain object from a ETuple message. Also converts values to other types if specified.
     * @param message ETuple
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ETuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ETuple to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ESet. */
export interface IESet {

    /** ESet ps */
    ps?: (IPar[]|null);

    /** ESet locallyFree */
    locallyFree?: (Uint8Array|null);

    /** ESet connectiveUsed */
    connectiveUsed?: (boolean|null);

    /** ESet remainder */
    remainder?: (IVar|null);
}

/** Represents a ESet. */
export class ESet implements IESet {

    /**
     * Constructs a new ESet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IESet);

    /** ESet ps. */
    public ps: IPar[];

    /** ESet locallyFree. */
    public locallyFree: Uint8Array;

    /** ESet connectiveUsed. */
    public connectiveUsed: boolean;

    /** ESet remainder. */
    public remainder?: (IVar|null);

    /**
     * Creates a new ESet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ESet instance
     */
    public static create(properties?: IESet): ESet;

    /**
     * Encodes the specified ESet message. Does not implicitly {@link ESet.verify|verify} messages.
     * @param message ESet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ESet message, length delimited. Does not implicitly {@link ESet.verify|verify} messages.
     * @param message ESet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ESet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESet;

    /**
     * Decodes a ESet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESet;

    /**
     * Verifies a ESet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ESet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ESet
     */
    public static fromObject(object: { [k: string]: any }): ESet;

    /**
     * Creates a plain object from a ESet message. Also converts values to other types if specified.
     * @param message ESet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ESet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ESet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMap. */
export interface IEMap {

    /** EMap kvs */
    kvs?: (IKeyValuePair[]|null);

    /** EMap locallyFree */
    locallyFree?: (Uint8Array|null);

    /** EMap connectiveUsed */
    connectiveUsed?: (boolean|null);

    /** EMap remainder */
    remainder?: (IVar|null);
}

/** Represents a EMap. */
export class EMap implements IEMap {

    /**
     * Constructs a new EMap.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMap);

    /** EMap kvs. */
    public kvs: IKeyValuePair[];

    /** EMap locallyFree. */
    public locallyFree: Uint8Array;

    /** EMap connectiveUsed. */
    public connectiveUsed: boolean;

    /** EMap remainder. */
    public remainder?: (IVar|null);

    /**
     * Creates a new EMap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMap instance
     */
    public static create(properties?: IEMap): EMap;

    /**
     * Encodes the specified EMap message. Does not implicitly {@link EMap.verify|verify} messages.
     * @param message EMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMap message, length delimited. Does not implicitly {@link EMap.verify|verify} messages.
     * @param message EMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMap message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMap;

    /**
     * Decodes a EMap message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMap;

    /**
     * Verifies a EMap message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMap message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMap
     */
    public static fromObject(object: { [k: string]: any }): EMap;

    /**
     * Creates a plain object from a EMap message. Also converts values to other types if specified.
     * @param message EMap
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMap to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMethod. */
export interface IEMethod {

    /** EMethod methodName */
    methodName?: (string|null);

    /** EMethod target */
    target?: (IPar|null);

    /** EMethod arguments */
    "arguments"?: (IPar[]|null);

    /** EMethod locallyFree */
    locallyFree?: (Uint8Array|null);

    /** EMethod connectiveUsed */
    connectiveUsed?: (boolean|null);
}

/** `target.method(arguments)` */
export class EMethod implements IEMethod {

    /**
     * Constructs a new EMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMethod);

    /** EMethod methodName. */
    public methodName: string;

    /** EMethod target. */
    public target?: (IPar|null);

    /** EMethod arguments. */
    public arguments: IPar[];

    /** EMethod locallyFree. */
    public locallyFree: Uint8Array;

    /** EMethod connectiveUsed. */
    public connectiveUsed: boolean;

    /**
     * Creates a new EMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMethod instance
     */
    public static create(properties?: IEMethod): EMethod;

    /**
     * Encodes the specified EMethod message. Does not implicitly {@link EMethod.verify|verify} messages.
     * @param message EMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMethod message, length delimited. Does not implicitly {@link EMethod.verify|verify} messages.
     * @param message EMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMethod;

    /**
     * Decodes a EMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMethod;

    /**
     * Verifies a EMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMethod
     */
    public static fromObject(object: { [k: string]: any }): EMethod;

    /**
     * Creates a plain object from a EMethod message. Also converts values to other types if specified.
     * @param message EMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a KeyValuePair. */
export interface IKeyValuePair {

    /** KeyValuePair key */
    key?: (IPar|null);

    /** KeyValuePair value */
    value?: (IPar|null);
}

/** Represents a KeyValuePair. */
export class KeyValuePair implements IKeyValuePair {

    /**
     * Constructs a new KeyValuePair.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKeyValuePair);

    /** KeyValuePair key. */
    public key?: (IPar|null);

    /** KeyValuePair value. */
    public value?: (IPar|null);

    /**
     * Creates a new KeyValuePair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KeyValuePair instance
     */
    public static create(properties?: IKeyValuePair): KeyValuePair;

    /**
     * Encodes the specified KeyValuePair message. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @param message KeyValuePair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @param message KeyValuePair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeyValuePair;

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeyValuePair;

    /**
     * Verifies a KeyValuePair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KeyValuePair
     */
    public static fromObject(object: { [k: string]: any }): KeyValuePair;

    /**
     * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
     * @param message KeyValuePair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KeyValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KeyValuePair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EVar. */
export interface IEVar {

    /** EVar v */
    v?: (IVar|null);
}

/** Represents a EVar. */
export class EVar implements IEVar {

    /**
     * Constructs a new EVar.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEVar);

    /** EVar v. */
    public v?: (IVar|null);

    /**
     * Creates a new EVar instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EVar instance
     */
    public static create(properties?: IEVar): EVar;

    /**
     * Encodes the specified EVar message. Does not implicitly {@link EVar.verify|verify} messages.
     * @param message EVar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EVar message, length delimited. Does not implicitly {@link EVar.verify|verify} messages.
     * @param message EVar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EVar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EVar;

    /**
     * Decodes a EVar message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EVar;

    /**
     * Verifies a EVar message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EVar message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EVar
     */
    public static fromObject(object: { [k: string]: any }): EVar;

    /**
     * Creates a plain object from a EVar message. Also converts values to other types if specified.
     * @param message EVar
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EVar to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ENot. */
export interface IENot {

    /** ENot p */
    p?: (IPar|null);
}

/** Represents a ENot. */
export class ENot implements IENot {

    /**
     * Constructs a new ENot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IENot);

    /** ENot p. */
    public p?: (IPar|null);

    /**
     * Creates a new ENot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ENot instance
     */
    public static create(properties?: IENot): ENot;

    /**
     * Encodes the specified ENot message. Does not implicitly {@link ENot.verify|verify} messages.
     * @param message ENot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ENot message, length delimited. Does not implicitly {@link ENot.verify|verify} messages.
     * @param message ENot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ENot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENot;

    /**
     * Decodes a ENot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENot;

    /**
     * Verifies a ENot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ENot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ENot
     */
    public static fromObject(object: { [k: string]: any }): ENot;

    /**
     * Creates a plain object from a ENot message. Also converts values to other types if specified.
     * @param message ENot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ENot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ENot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ENeg. */
export interface IENeg {

    /** ENeg p */
    p?: (IPar|null);
}

/** Represents a ENeg. */
export class ENeg implements IENeg {

    /**
     * Constructs a new ENeg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IENeg);

    /** ENeg p. */
    public p?: (IPar|null);

    /**
     * Creates a new ENeg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ENeg instance
     */
    public static create(properties?: IENeg): ENeg;

    /**
     * Encodes the specified ENeg message. Does not implicitly {@link ENeg.verify|verify} messages.
     * @param message ENeg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ENeg message, length delimited. Does not implicitly {@link ENeg.verify|verify} messages.
     * @param message ENeg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ENeg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeg;

    /**
     * Decodes a ENeg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeg;

    /**
     * Verifies a ENeg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ENeg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ENeg
     */
    public static fromObject(object: { [k: string]: any }): ENeg;

    /**
     * Creates a plain object from a ENeg message. Also converts values to other types if specified.
     * @param message ENeg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ENeg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ENeg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMult. */
export interface IEMult {

    /** EMult p1 */
    p1?: (IPar|null);

    /** EMult p2 */
    p2?: (IPar|null);
}

/** Represents a EMult. */
export class EMult implements IEMult {

    /**
     * Constructs a new EMult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMult);

    /** EMult p1. */
    public p1?: (IPar|null);

    /** EMult p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EMult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMult instance
     */
    public static create(properties?: IEMult): EMult;

    /**
     * Encodes the specified EMult message. Does not implicitly {@link EMult.verify|verify} messages.
     * @param message EMult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMult message, length delimited. Does not implicitly {@link EMult.verify|verify} messages.
     * @param message EMult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMult;

    /**
     * Decodes a EMult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMult;

    /**
     * Verifies a EMult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMult
     */
    public static fromObject(object: { [k: string]: any }): EMult;

    /**
     * Creates a plain object from a EMult message. Also converts values to other types if specified.
     * @param message EMult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EDiv. */
export interface IEDiv {

    /** EDiv p1 */
    p1?: (IPar|null);

    /** EDiv p2 */
    p2?: (IPar|null);
}

/** Represents a EDiv. */
export class EDiv implements IEDiv {

    /**
     * Constructs a new EDiv.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEDiv);

    /** EDiv p1. */
    public p1?: (IPar|null);

    /** EDiv p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EDiv instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EDiv instance
     */
    public static create(properties?: IEDiv): EDiv;

    /**
     * Encodes the specified EDiv message. Does not implicitly {@link EDiv.verify|verify} messages.
     * @param message EDiv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EDiv message, length delimited. Does not implicitly {@link EDiv.verify|verify} messages.
     * @param message EDiv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EDiv message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EDiv;

    /**
     * Decodes a EDiv message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EDiv;

    /**
     * Verifies a EDiv message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EDiv message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EDiv
     */
    public static fromObject(object: { [k: string]: any }): EDiv;

    /**
     * Creates a plain object from a EDiv message. Also converts values to other types if specified.
     * @param message EDiv
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EDiv, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EDiv to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMod. */
export interface IEMod {

    /** EMod p1 */
    p1?: (IPar|null);

    /** EMod p2 */
    p2?: (IPar|null);
}

/** Represents a EMod. */
export class EMod implements IEMod {

    /**
     * Constructs a new EMod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMod);

    /** EMod p1. */
    public p1?: (IPar|null);

    /** EMod p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EMod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMod instance
     */
    public static create(properties?: IEMod): EMod;

    /**
     * Encodes the specified EMod message. Does not implicitly {@link EMod.verify|verify} messages.
     * @param message EMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMod message, length delimited. Does not implicitly {@link EMod.verify|verify} messages.
     * @param message EMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMod;

    /**
     * Decodes a EMod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMod;

    /**
     * Verifies a EMod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMod
     */
    public static fromObject(object: { [k: string]: any }): EMod;

    /**
     * Creates a plain object from a EMod message. Also converts values to other types if specified.
     * @param message EMod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EPlus. */
export interface IEPlus {

    /** EPlus p1 */
    p1?: (IPar|null);

    /** EPlus p2 */
    p2?: (IPar|null);
}

/** Represents a EPlus. */
export class EPlus implements IEPlus {

    /**
     * Constructs a new EPlus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEPlus);

    /** EPlus p1. */
    public p1?: (IPar|null);

    /** EPlus p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EPlus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EPlus instance
     */
    public static create(properties?: IEPlus): EPlus;

    /**
     * Encodes the specified EPlus message. Does not implicitly {@link EPlus.verify|verify} messages.
     * @param message EPlus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EPlus message, length delimited. Does not implicitly {@link EPlus.verify|verify} messages.
     * @param message EPlus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EPlus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlus;

    /**
     * Decodes a EPlus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlus;

    /**
     * Verifies a EPlus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EPlus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EPlus
     */
    public static fromObject(object: { [k: string]: any }): EPlus;

    /**
     * Creates a plain object from a EPlus message. Also converts values to other types if specified.
     * @param message EPlus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EPlus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMinus. */
export interface IEMinus {

    /** EMinus p1 */
    p1?: (IPar|null);

    /** EMinus p2 */
    p2?: (IPar|null);
}

/** Represents a EMinus. */
export class EMinus implements IEMinus {

    /**
     * Constructs a new EMinus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMinus);

    /** EMinus p1. */
    public p1?: (IPar|null);

    /** EMinus p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EMinus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMinus instance
     */
    public static create(properties?: IEMinus): EMinus;

    /**
     * Encodes the specified EMinus message. Does not implicitly {@link EMinus.verify|verify} messages.
     * @param message EMinus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMinus message, length delimited. Does not implicitly {@link EMinus.verify|verify} messages.
     * @param message EMinus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMinus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinus;

    /**
     * Decodes a EMinus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinus;

    /**
     * Verifies a EMinus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMinus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMinus
     */
    public static fromObject(object: { [k: string]: any }): EMinus;

    /**
     * Creates a plain object from a EMinus message. Also converts values to other types if specified.
     * @param message EMinus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMinus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ELt. */
export interface IELt {

    /** ELt p1 */
    p1?: (IPar|null);

    /** ELt p2 */
    p2?: (IPar|null);
}

/** Represents a ELt. */
export class ELt implements IELt {

    /**
     * Constructs a new ELt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IELt);

    /** ELt p1. */
    public p1?: (IPar|null);

    /** ELt p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new ELt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ELt instance
     */
    public static create(properties?: IELt): ELt;

    /**
     * Encodes the specified ELt message. Does not implicitly {@link ELt.verify|verify} messages.
     * @param message ELt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ELt message, length delimited. Does not implicitly {@link ELt.verify|verify} messages.
     * @param message ELt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ELt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELt;

    /**
     * Decodes a ELt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELt;

    /**
     * Verifies a ELt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ELt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ELt
     */
    public static fromObject(object: { [k: string]: any }): ELt;

    /**
     * Creates a plain object from a ELt message. Also converts values to other types if specified.
     * @param message ELt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ELt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ELt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ELte. */
export interface IELte {

    /** ELte p1 */
    p1?: (IPar|null);

    /** ELte p2 */
    p2?: (IPar|null);
}

/** Represents a ELte. */
export class ELte implements IELte {

    /**
     * Constructs a new ELte.
     * @param [properties] Properties to set
     */
    constructor(properties?: IELte);

    /** ELte p1. */
    public p1?: (IPar|null);

    /** ELte p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new ELte instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ELte instance
     */
    public static create(properties?: IELte): ELte;

    /**
     * Encodes the specified ELte message. Does not implicitly {@link ELte.verify|verify} messages.
     * @param message ELte message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ELte message, length delimited. Does not implicitly {@link ELte.verify|verify} messages.
     * @param message ELte message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ELte message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELte;

    /**
     * Decodes a ELte message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELte;

    /**
     * Verifies a ELte message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ELte message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ELte
     */
    public static fromObject(object: { [k: string]: any }): ELte;

    /**
     * Creates a plain object from a ELte message. Also converts values to other types if specified.
     * @param message ELte
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ELte, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ELte to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EGt. */
export interface IEGt {

    /** EGt p1 */
    p1?: (IPar|null);

    /** EGt p2 */
    p2?: (IPar|null);
}

/** Represents a EGt. */
export class EGt implements IEGt {

    /**
     * Constructs a new EGt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEGt);

    /** EGt p1. */
    public p1?: (IPar|null);

    /** EGt p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EGt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EGt instance
     */
    public static create(properties?: IEGt): EGt;

    /**
     * Encodes the specified EGt message. Does not implicitly {@link EGt.verify|verify} messages.
     * @param message EGt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EGt message, length delimited. Does not implicitly {@link EGt.verify|verify} messages.
     * @param message EGt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EGt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGt;

    /**
     * Decodes a EGt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGt;

    /**
     * Verifies a EGt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EGt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EGt
     */
    public static fromObject(object: { [k: string]: any }): EGt;

    /**
     * Creates a plain object from a EGt message. Also converts values to other types if specified.
     * @param message EGt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EGt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EGt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EGte. */
export interface IEGte {

    /** EGte p1 */
    p1?: (IPar|null);

    /** EGte p2 */
    p2?: (IPar|null);
}

/** Represents a EGte. */
export class EGte implements IEGte {

    /**
     * Constructs a new EGte.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEGte);

    /** EGte p1. */
    public p1?: (IPar|null);

    /** EGte p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EGte instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EGte instance
     */
    public static create(properties?: IEGte): EGte;

    /**
     * Encodes the specified EGte message. Does not implicitly {@link EGte.verify|verify} messages.
     * @param message EGte message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EGte message, length delimited. Does not implicitly {@link EGte.verify|verify} messages.
     * @param message EGte message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EGte message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGte;

    /**
     * Decodes a EGte message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGte;

    /**
     * Verifies a EGte message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EGte message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EGte
     */
    public static fromObject(object: { [k: string]: any }): EGte;

    /**
     * Creates a plain object from a EGte message. Also converts values to other types if specified.
     * @param message EGte
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EGte, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EGte to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EEq. */
export interface IEEq {

    /** EEq p1 */
    p1?: (IPar|null);

    /** EEq p2 */
    p2?: (IPar|null);
}

/** Represents a EEq. */
export class EEq implements IEEq {

    /**
     * Constructs a new EEq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEEq);

    /** EEq p1. */
    public p1?: (IPar|null);

    /** EEq p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EEq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EEq instance
     */
    public static create(properties?: IEEq): EEq;

    /**
     * Encodes the specified EEq message. Does not implicitly {@link EEq.verify|verify} messages.
     * @param message EEq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EEq message, length delimited. Does not implicitly {@link EEq.verify|verify} messages.
     * @param message EEq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EEq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EEq;

    /**
     * Decodes a EEq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EEq;

    /**
     * Verifies a EEq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EEq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EEq
     */
    public static fromObject(object: { [k: string]: any }): EEq;

    /**
     * Creates a plain object from a EEq message. Also converts values to other types if specified.
     * @param message EEq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EEq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EEq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ENeq. */
export interface IENeq {

    /** ENeq p1 */
    p1?: (IPar|null);

    /** ENeq p2 */
    p2?: (IPar|null);
}

/** Represents a ENeq. */
export class ENeq implements IENeq {

    /**
     * Constructs a new ENeq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IENeq);

    /** ENeq p1. */
    public p1?: (IPar|null);

    /** ENeq p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new ENeq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ENeq instance
     */
    public static create(properties?: IENeq): ENeq;

    /**
     * Encodes the specified ENeq message. Does not implicitly {@link ENeq.verify|verify} messages.
     * @param message ENeq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ENeq message, length delimited. Does not implicitly {@link ENeq.verify|verify} messages.
     * @param message ENeq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ENeq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeq;

    /**
     * Decodes a ENeq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeq;

    /**
     * Verifies a ENeq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ENeq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ENeq
     */
    public static fromObject(object: { [k: string]: any }): ENeq;

    /**
     * Creates a plain object from a ENeq message. Also converts values to other types if specified.
     * @param message ENeq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ENeq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ENeq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EAnd. */
export interface IEAnd {

    /** EAnd p1 */
    p1?: (IPar|null);

    /** EAnd p2 */
    p2?: (IPar|null);
}

/** Represents a EAnd. */
export class EAnd implements IEAnd {

    /**
     * Constructs a new EAnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEAnd);

    /** EAnd p1. */
    public p1?: (IPar|null);

    /** EAnd p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EAnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EAnd instance
     */
    public static create(properties?: IEAnd): EAnd;

    /**
     * Encodes the specified EAnd message. Does not implicitly {@link EAnd.verify|verify} messages.
     * @param message EAnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EAnd message, length delimited. Does not implicitly {@link EAnd.verify|verify} messages.
     * @param message EAnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EAnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EAnd;

    /**
     * Decodes a EAnd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EAnd;

    /**
     * Verifies a EAnd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EAnd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EAnd
     */
    public static fromObject(object: { [k: string]: any }): EAnd;

    /**
     * Creates a plain object from a EAnd message. Also converts values to other types if specified.
     * @param message EAnd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EAnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EAnd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EOr. */
export interface IEOr {

    /** EOr p1 */
    p1?: (IPar|null);

    /** EOr p2 */
    p2?: (IPar|null);
}

/** Represents a EOr. */
export class EOr implements IEOr {

    /**
     * Constructs a new EOr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEOr);

    /** EOr p1. */
    public p1?: (IPar|null);

    /** EOr p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EOr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EOr instance
     */
    public static create(properties?: IEOr): EOr;

    /**
     * Encodes the specified EOr message. Does not implicitly {@link EOr.verify|verify} messages.
     * @param message EOr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EOr message, length delimited. Does not implicitly {@link EOr.verify|verify} messages.
     * @param message EOr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EOr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EOr;

    /**
     * Decodes a EOr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EOr;

    /**
     * Verifies a EOr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EOr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EOr
     */
    public static fromObject(object: { [k: string]: any }): EOr;

    /**
     * Creates a plain object from a EOr message. Also converts values to other types if specified.
     * @param message EOr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EOr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EOr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMatches. */
export interface IEMatches {

    /** EMatches target */
    target?: (IPar|null);

    /** EMatches pattern */
    pattern?: (IPar|null);
}

/** Represents a EMatches. */
export class EMatches implements IEMatches {

    /**
     * Constructs a new EMatches.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMatches);

    /** EMatches target. */
    public target?: (IPar|null);

    /** EMatches pattern. */
    public pattern?: (IPar|null);

    /**
     * Creates a new EMatches instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMatches instance
     */
    public static create(properties?: IEMatches): EMatches;

    /**
     * Encodes the specified EMatches message. Does not implicitly {@link EMatches.verify|verify} messages.
     * @param message EMatches message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMatches message, length delimited. Does not implicitly {@link EMatches.verify|verify} messages.
     * @param message EMatches message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMatches message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMatches;

    /**
     * Decodes a EMatches message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMatches;

    /**
     * Verifies a EMatches message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMatches message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMatches
     */
    public static fromObject(object: { [k: string]: any }): EMatches;

    /**
     * Creates a plain object from a EMatches message. Also converts values to other types if specified.
     * @param message EMatches
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMatches, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMatches to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EPercentPercent. */
export interface IEPercentPercent {

    /** EPercentPercent p1 */
    p1?: (IPar|null);

    /** EPercentPercent p2 */
    p2?: (IPar|null);
}

/**
 * String interpolation
 *
 * `"Hello, {name}" %% {"name": "Bob"}` denotes `"Hello, Bob"`
 */
export class EPercentPercent implements IEPercentPercent {

    /**
     * Constructs a new EPercentPercent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEPercentPercent);

    /** EPercentPercent p1. */
    public p1?: (IPar|null);

    /** EPercentPercent p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EPercentPercent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EPercentPercent instance
     */
    public static create(properties?: IEPercentPercent): EPercentPercent;

    /**
     * Encodes the specified EPercentPercent message. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @param message EPercentPercent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EPercentPercent message, length delimited. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @param message EPercentPercent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPercentPercent;

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPercentPercent;

    /**
     * Verifies a EPercentPercent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EPercentPercent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EPercentPercent
     */
    public static fromObject(object: { [k: string]: any }): EPercentPercent;

    /**
     * Creates a plain object from a EPercentPercent message. Also converts values to other types if specified.
     * @param message EPercentPercent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EPercentPercent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EPercentPercent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EPlusPlus. */
export interface IEPlusPlus {

    /** EPlusPlus p1 */
    p1?: (IPar|null);

    /** EPlusPlus p2 */
    p2?: (IPar|null);
}

/** Represents a EPlusPlus. */
export class EPlusPlus implements IEPlusPlus {

    /**
     * Constructs a new EPlusPlus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEPlusPlus);

    /** EPlusPlus p1. */
    public p1?: (IPar|null);

    /** EPlusPlus p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EPlusPlus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EPlusPlus instance
     */
    public static create(properties?: IEPlusPlus): EPlusPlus;

    /**
     * Encodes the specified EPlusPlus message. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @param message EPlusPlus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EPlusPlus message, length delimited. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @param message EPlusPlus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlusPlus;

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlusPlus;

    /**
     * Verifies a EPlusPlus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EPlusPlus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EPlusPlus
     */
    public static fromObject(object: { [k: string]: any }): EPlusPlus;

    /**
     * Creates a plain object from a EPlusPlus message. Also converts values to other types if specified.
     * @param message EPlusPlus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EPlusPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EPlusPlus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a EMinusMinus. */
export interface IEMinusMinus {

    /** EMinusMinus p1 */
    p1?: (IPar|null);

    /** EMinusMinus p2 */
    p2?: (IPar|null);
}

/** Represents a EMinusMinus. */
export class EMinusMinus implements IEMinusMinus {

    /**
     * Constructs a new EMinusMinus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEMinusMinus);

    /** EMinusMinus p1. */
    public p1?: (IPar|null);

    /** EMinusMinus p2. */
    public p2?: (IPar|null);

    /**
     * Creates a new EMinusMinus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EMinusMinus instance
     */
    public static create(properties?: IEMinusMinus): EMinusMinus;

    /**
     * Encodes the specified EMinusMinus message. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @param message EMinusMinus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EMinusMinus message, length delimited. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @param message EMinusMinus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinusMinus;

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinusMinus;

    /**
     * Verifies a EMinusMinus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EMinusMinus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EMinusMinus
     */
    public static fromObject(object: { [k: string]: any }): EMinusMinus;

    /**
     * Creates a plain object from a EMinusMinus message. Also converts values to other types if specified.
     * @param message EMinusMinus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EMinusMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EMinusMinus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Connective. */
export interface IConnective {

    /** Connective connAndBody */
    connAndBody?: (IConnectiveBody|null);

    /** Connective connOrBody */
    connOrBody?: (IConnectiveBody|null);

    /** Connective connNotBody */
    connNotBody?: (IPar|null);

    /** Connective varRefBody */
    varRefBody?: (IVarRef|null);

    /** Connective connBool */
    connBool?: (boolean|null);

    /** Connective connInt */
    connInt?: (boolean|null);

    /** Connective connString */
    connString?: (boolean|null);

    /** Connective connUri */
    connUri?: (boolean|null);

    /** Connective connByteArray */
    connByteArray?: (boolean|null);
}

/** Represents a Connective. */
export class Connective implements IConnective {

    /**
     * Constructs a new Connective.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnective);

    /** Connective connAndBody. */
    public connAndBody?: (IConnectiveBody|null);

    /** Connective connOrBody. */
    public connOrBody?: (IConnectiveBody|null);

    /** Connective connNotBody. */
    public connNotBody?: (IPar|null);

    /** Connective varRefBody. */
    public varRefBody?: (IVarRef|null);

    /** Connective connBool. */
    public connBool: boolean;

    /** Connective connInt. */
    public connInt: boolean;

    /** Connective connString. */
    public connString: boolean;

    /** Connective connUri. */
    public connUri: boolean;

    /** Connective connByteArray. */
    public connByteArray: boolean;

    /** Connective connectiveInstance. */
    public connectiveInstance?: ("connAndBody"|"connOrBody"|"connNotBody"|"varRefBody"|"connBool"|"connInt"|"connString"|"connUri"|"connByteArray");

    /**
     * Creates a new Connective instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Connective instance
     */
    public static create(properties?: IConnective): Connective;

    /**
     * Encodes the specified Connective message. Does not implicitly {@link Connective.verify|verify} messages.
     * @param message Connective message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Connective message, length delimited. Does not implicitly {@link Connective.verify|verify} messages.
     * @param message Connective message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Connective message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Connective;

    /**
     * Decodes a Connective message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Connective;

    /**
     * Verifies a Connective message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Connective message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Connective
     */
    public static fromObject(object: { [k: string]: any }): Connective;

    /**
     * Creates a plain object from a Connective message. Also converts values to other types if specified.
     * @param message Connective
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Connective, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Connective to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VarRef. */
export interface IVarRef {

    /** VarRef index */
    index?: (number|null);

    /** VarRef depth */
    depth?: (number|null);
}

/** Represents a VarRef. */
export class VarRef implements IVarRef {

    /**
     * Constructs a new VarRef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVarRef);

    /** VarRef index. */
    public index: number;

    /** VarRef depth. */
    public depth: number;

    /**
     * Creates a new VarRef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VarRef instance
     */
    public static create(properties?: IVarRef): VarRef;

    /**
     * Encodes the specified VarRef message. Does not implicitly {@link VarRef.verify|verify} messages.
     * @param message VarRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VarRef message, length delimited. Does not implicitly {@link VarRef.verify|verify} messages.
     * @param message VarRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VarRef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VarRef;

    /**
     * Decodes a VarRef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VarRef;

    /**
     * Verifies a VarRef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VarRef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VarRef
     */
    public static fromObject(object: { [k: string]: any }): VarRef;

    /**
     * Creates a plain object from a VarRef message. Also converts values to other types if specified.
     * @param message VarRef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VarRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VarRef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectiveBody. */
export interface IConnectiveBody {

    /** ConnectiveBody ps */
    ps?: (IPar[]|null);
}

/** Represents a ConnectiveBody. */
export class ConnectiveBody implements IConnectiveBody {

    /**
     * Constructs a new ConnectiveBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectiveBody);

    /** ConnectiveBody ps. */
    public ps: IPar[];

    /**
     * Creates a new ConnectiveBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectiveBody instance
     */
    public static create(properties?: IConnectiveBody): ConnectiveBody;

    /**
     * Encodes the specified ConnectiveBody message. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @param message ConnectiveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectiveBody message, length delimited. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @param message ConnectiveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectiveBody;

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectiveBody;

    /**
     * Verifies a ConnectiveBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectiveBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectiveBody
     */
    public static fromObject(object: { [k: string]: any }): ConnectiveBody;

    /**
     * Creates a plain object from a ConnectiveBody message. Also converts values to other types if specified.
     * @param message ConnectiveBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectiveBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectiveBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeployId. */
export interface IDeployId {

    /** DeployId sig */
    sig?: (Uint8Array|null);
}

/** Represents a DeployId. */
export class DeployId implements IDeployId {

    /**
     * Constructs a new DeployId.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeployId);

    /** DeployId sig. */
    public sig: Uint8Array;

    /**
     * Creates a new DeployId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeployId instance
     */
    public static create(properties?: IDeployId): DeployId;

    /**
     * Encodes the specified DeployId message. Does not implicitly {@link DeployId.verify|verify} messages.
     * @param message DeployId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeployId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeployId message, length delimited. Does not implicitly {@link DeployId.verify|verify} messages.
     * @param message DeployId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeployId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeployId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeployId;

    /**
     * Decodes a DeployId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeployId;

    /**
     * Verifies a DeployId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeployId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeployId
     */
    public static fromObject(object: { [k: string]: any }): DeployId;

    /**
     * Creates a plain object from a DeployId message. Also converts values to other types if specified.
     * @param message DeployId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeployId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeployId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeployerId. */
export interface IDeployerId {

    /** DeployerId publicKey */
    publicKey?: (Uint8Array|null);
}

/** Represents a DeployerId. */
export class DeployerId implements IDeployerId {

    /**
     * Constructs a new DeployerId.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeployerId);

    /** DeployerId publicKey. */
    public publicKey: Uint8Array;

    /**
     * Creates a new DeployerId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeployerId instance
     */
    public static create(properties?: IDeployerId): DeployerId;

    /**
     * Encodes the specified DeployerId message. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @param message DeployerId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeployerId message, length delimited. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @param message DeployerId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeployerId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeployerId;

    /**
     * Decodes a DeployerId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeployerId;

    /**
     * Verifies a DeployerId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeployerId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeployerId
     */
    public static fromObject(object: { [k: string]: any }): DeployerId;

    /**
     * Creates a plain object from a DeployerId message. Also converts values to other types if specified.
     * @param message DeployerId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeployerId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeployerId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GUnforgeable. */
export interface IGUnforgeable {

    /** GUnforgeable gPrivateBody */
    gPrivateBody?: (IGPrivate|null);

    /** GUnforgeable gDeployIdBody */
    gDeployIdBody?: (IGDeployId|null);

    /** GUnforgeable gDeployerIdBody */
    gDeployerIdBody?: (IGDeployerId|null);
}

/** Represents a GUnforgeable. */
export class GUnforgeable implements IGUnforgeable {

    /**
     * Constructs a new GUnforgeable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGUnforgeable);

    /** GUnforgeable gPrivateBody. */
    public gPrivateBody?: (IGPrivate|null);

    /** GUnforgeable gDeployIdBody. */
    public gDeployIdBody?: (IGDeployId|null);

    /** GUnforgeable gDeployerIdBody. */
    public gDeployerIdBody?: (IGDeployerId|null);

    /** GUnforgeable unfInstance. */
    public unfInstance?: ("gPrivateBody"|"gDeployIdBody"|"gDeployerIdBody");

    /**
     * Creates a new GUnforgeable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GUnforgeable instance
     */
    public static create(properties?: IGUnforgeable): GUnforgeable;

    /**
     * Encodes the specified GUnforgeable message. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @param message GUnforgeable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGUnforgeable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GUnforgeable message, length delimited. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @param message GUnforgeable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGUnforgeable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GUnforgeable;

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GUnforgeable;

    /**
     * Verifies a GUnforgeable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GUnforgeable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GUnforgeable
     */
    public static fromObject(object: { [k: string]: any }): GUnforgeable;

    /**
     * Creates a plain object from a GUnforgeable message. Also converts values to other types if specified.
     * @param message GUnforgeable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GUnforgeable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GUnforgeable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GPrivate. */
export interface IGPrivate {

    /** GPrivate id */
    id?: (Uint8Array|null);
}

/** Represents a GPrivate. */
export class GPrivate implements IGPrivate {

    /**
     * Constructs a new GPrivate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGPrivate);

    /** GPrivate id. */
    public id: Uint8Array;

    /**
     * Creates a new GPrivate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GPrivate instance
     */
    public static create(properties?: IGPrivate): GPrivate;

    /**
     * Encodes the specified GPrivate message. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @param message GPrivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GPrivate message, length delimited. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @param message GPrivate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GPrivate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GPrivate;

    /**
     * Decodes a GPrivate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GPrivate;

    /**
     * Verifies a GPrivate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GPrivate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GPrivate
     */
    public static fromObject(object: { [k: string]: any }): GPrivate;

    /**
     * Creates a plain object from a GPrivate message. Also converts values to other types if specified.
     * @param message GPrivate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GPrivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GPrivate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GDeployId. */
export interface IGDeployId {

    /** GDeployId sig */
    sig?: (Uint8Array|null);
}

/** Represents a GDeployId. */
export class GDeployId implements IGDeployId {

    /**
     * Constructs a new GDeployId.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGDeployId);

    /** GDeployId sig. */
    public sig: Uint8Array;

    /**
     * Creates a new GDeployId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDeployId instance
     */
    public static create(properties?: IGDeployId): GDeployId;

    /**
     * Encodes the specified GDeployId message. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @param message GDeployId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGDeployId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDeployId message, length delimited. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @param message GDeployId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGDeployId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDeployId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDeployId;

    /**
     * Decodes a GDeployId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDeployId;

    /**
     * Verifies a GDeployId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDeployId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDeployId
     */
    public static fromObject(object: { [k: string]: any }): GDeployId;

    /**
     * Creates a plain object from a GDeployId message. Also converts values to other types if specified.
     * @param message GDeployId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GDeployId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDeployId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GDeployerId. */
export interface IGDeployerId {

    /** GDeployerId publicKey */
    publicKey?: (Uint8Array|null);
}

/** Represents a GDeployerId. */
export class GDeployerId implements IGDeployerId {

    /**
     * Constructs a new GDeployerId.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGDeployerId);

    /** GDeployerId publicKey. */
    public publicKey: Uint8Array;

    /**
     * Creates a new GDeployerId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDeployerId instance
     */
    public static create(properties?: IGDeployerId): GDeployerId;

    /**
     * Encodes the specified GDeployerId message. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @param message GDeployerId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDeployerId message, length delimited. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @param message GDeployerId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDeployerId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDeployerId;

    /**
     * Decodes a GDeployerId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDeployerId;

    /**
     * Verifies a GDeployerId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDeployerId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDeployerId
     */
    public static fromObject(object: { [k: string]: any }): GDeployerId;

    /**
     * Creates a plain object from a GDeployerId message. Also converts values to other types if specified.
     * @param message GDeployerId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GDeployerId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDeployerId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServiceError. */
export interface IServiceError {

    /** ServiceError messages */
    messages?: (string[]|null);
}

/** Represents a ServiceError. */
export class ServiceError implements IServiceError {

    /**
     * Constructs a new ServiceError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServiceError);

    /** ServiceError messages. */
    public messages: string[];

    /**
     * Creates a new ServiceError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServiceError instance
     */
    public static create(properties?: IServiceError): ServiceError;

    /**
     * Encodes the specified ServiceError message. Does not implicitly {@link ServiceError.verify|verify} messages.
     * @param message ServiceError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServiceError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServiceError message, length delimited. Does not implicitly {@link ServiceError.verify|verify} messages.
     * @param message ServiceError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServiceError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServiceError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServiceError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServiceError;

    /**
     * Decodes a ServiceError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServiceError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServiceError;

    /**
     * Verifies a ServiceError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServiceError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServiceError
     */
    public static fromObject(object: { [k: string]: any }): ServiceError;

    /**
     * Creates a plain object from a ServiceError message. Also converts values to other types if specified.
     * @param message ServiceError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServiceError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServiceError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace routing. */
export namespace routing {

    /** Properties of a Node. */
    interface INode {

        /** Node id */
        id?: (Uint8Array|null);

        /** Node host */
        host?: (Uint8Array|null);

        /** Node tcpPort */
        tcpPort?: (number|null);

        /** Node udpPort */
        udpPort?: (number|null);
    }

    /** Represents a Node. */
    class Node implements INode {

        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.INode);

        /** Node id. */
        public id: Uint8Array;

        /** Node host. */
        public host: Uint8Array;

        /** Node tcpPort. */
        public tcpPort: number;

        /** Node udpPort. */
        public udpPort: number;

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: routing.INode): routing.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link routing.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link routing.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): routing.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Header. */
    interface IHeader {

        /** Header sender */
        sender?: (routing.INode|null);

        /** Header networkId */
        networkId?: (string|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IHeader);

        /** Header sender. */
        public sender?: (routing.INode|null);

        /** Header networkId. */
        public networkId: string;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: routing.IHeader): routing.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link routing.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link routing.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): routing.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Heartbeat. */
    interface IHeartbeat {
    }

    /** Represents a Heartbeat. */
    class Heartbeat implements IHeartbeat {

        /**
         * Constructs a new Heartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IHeartbeat);

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heartbeat instance
         */
        public static create(properties?: routing.IHeartbeat): routing.Heartbeat;

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link routing.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link routing.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Heartbeat;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Heartbeat;

        /**
         * Verifies a Heartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Heartbeat
         */
        public static fromObject(object: { [k: string]: any }): routing.Heartbeat;

        /**
         * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
         * @param message Heartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Heartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Heartbeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatResponse. */
    interface IHeartbeatResponse {
    }

    /** Represents a HeartbeatResponse. */
    class HeartbeatResponse implements IHeartbeatResponse {

        /**
         * Constructs a new HeartbeatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IHeartbeatResponse);

        /**
         * Creates a new HeartbeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatResponse instance
         */
        public static create(properties?: routing.IHeartbeatResponse): routing.HeartbeatResponse;

        /**
         * Encodes the specified HeartbeatResponse message. Does not implicitly {@link routing.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatResponse message, length delimited. Does not implicitly {@link routing.HeartbeatResponse.verify|verify} messages.
         * @param message HeartbeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IHeartbeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.HeartbeatResponse;

        /**
         * Decodes a HeartbeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.HeartbeatResponse;

        /**
         * Verifies a HeartbeatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatResponse
         */
        public static fromObject(object: { [k: string]: any }): routing.HeartbeatResponse;

        /**
         * Creates a plain object from a HeartbeatResponse message. Also converts values to other types if specified.
         * @param message HeartbeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.HeartbeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtocolHandshake. */
    interface IProtocolHandshake {

        /** ProtocolHandshake nonce */
        nonce?: (Uint8Array|null);
    }

    /** Represents a ProtocolHandshake. */
    class ProtocolHandshake implements IProtocolHandshake {

        /**
         * Constructs a new ProtocolHandshake.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IProtocolHandshake);

        /** ProtocolHandshake nonce. */
        public nonce: Uint8Array;

        /**
         * Creates a new ProtocolHandshake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolHandshake instance
         */
        public static create(properties?: routing.IProtocolHandshake): routing.ProtocolHandshake;

        /**
         * Encodes the specified ProtocolHandshake message. Does not implicitly {@link routing.ProtocolHandshake.verify|verify} messages.
         * @param message ProtocolHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IProtocolHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolHandshake message, length delimited. Does not implicitly {@link routing.ProtocolHandshake.verify|verify} messages.
         * @param message ProtocolHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IProtocolHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolHandshake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.ProtocolHandshake;

        /**
         * Decodes a ProtocolHandshake message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.ProtocolHandshake;

        /**
         * Verifies a ProtocolHandshake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolHandshake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolHandshake
         */
        public static fromObject(object: { [k: string]: any }): routing.ProtocolHandshake;

        /**
         * Creates a plain object from a ProtocolHandshake message. Also converts values to other types if specified.
         * @param message ProtocolHandshake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.ProtocolHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolHandshake to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtocolHandshakeResponse. */
    interface IProtocolHandshakeResponse {

        /** ProtocolHandshakeResponse nonce */
        nonce?: (Uint8Array|null);
    }

    /** Represents a ProtocolHandshakeResponse. */
    class ProtocolHandshakeResponse implements IProtocolHandshakeResponse {

        /**
         * Constructs a new ProtocolHandshakeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IProtocolHandshakeResponse);

        /** ProtocolHandshakeResponse nonce. */
        public nonce: Uint8Array;

        /**
         * Creates a new ProtocolHandshakeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolHandshakeResponse instance
         */
        public static create(properties?: routing.IProtocolHandshakeResponse): routing.ProtocolHandshakeResponse;

        /**
         * Encodes the specified ProtocolHandshakeResponse message. Does not implicitly {@link routing.ProtocolHandshakeResponse.verify|verify} messages.
         * @param message ProtocolHandshakeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IProtocolHandshakeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolHandshakeResponse message, length delimited. Does not implicitly {@link routing.ProtocolHandshakeResponse.verify|verify} messages.
         * @param message ProtocolHandshakeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IProtocolHandshakeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolHandshakeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolHandshakeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.ProtocolHandshakeResponse;

        /**
         * Decodes a ProtocolHandshakeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolHandshakeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.ProtocolHandshakeResponse;

        /**
         * Verifies a ProtocolHandshakeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolHandshakeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolHandshakeResponse
         */
        public static fromObject(object: { [k: string]: any }): routing.ProtocolHandshakeResponse;

        /**
         * Creates a plain object from a ProtocolHandshakeResponse message. Also converts values to other types if specified.
         * @param message ProtocolHandshakeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.ProtocolHandshakeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolHandshakeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Packet. */
    interface IPacket {

        /** Packet typeId */
        typeId?: (string|null);

        /** Packet content */
        content?: (Uint8Array|null);
    }

    /** Represents a Packet. */
    class Packet implements IPacket {

        /**
         * Constructs a new Packet.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IPacket);

        /** Packet typeId. */
        public typeId: string;

        /** Packet content. */
        public content: Uint8Array;

        /**
         * Creates a new Packet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Packet instance
         */
        public static create(properties?: routing.IPacket): routing.Packet;

        /**
         * Encodes the specified Packet message. Does not implicitly {@link routing.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Packet message, length delimited. Does not implicitly {@link routing.Packet.verify|verify} messages.
         * @param message Packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Packet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Packet;

        /**
         * Decodes a Packet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Packet;

        /**
         * Verifies a Packet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Packet
         */
        public static fromObject(object: { [k: string]: any }): routing.Packet;

        /**
         * Creates a plain object from a Packet message. Also converts values to other types if specified.
         * @param message Packet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Packet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Disconnect. */
    interface IDisconnect {
    }

    /** Represents a Disconnect. */
    class Disconnect implements IDisconnect {

        /**
         * Constructs a new Disconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IDisconnect);

        /**
         * Creates a new Disconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Disconnect instance
         */
        public static create(properties?: routing.IDisconnect): routing.Disconnect;

        /**
         * Encodes the specified Disconnect message. Does not implicitly {@link routing.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link routing.Disconnect.verify|verify} messages.
         * @param message Disconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Disconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Disconnect;

        /**
         * Decodes a Disconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Disconnect;

        /**
         * Verifies a Disconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Disconnect
         */
        public static fromObject(object: { [k: string]: any }): routing.Disconnect;

        /**
         * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
         * @param message Disconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Disconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Protocol. */
    interface IProtocol {

        /** Protocol header */
        header?: (routing.IHeader|null);

        /** Protocol heartbeat */
        heartbeat?: (routing.IHeartbeat|null);

        /** Protocol protocolHandshake */
        protocolHandshake?: (routing.IProtocolHandshake|null);

        /** Protocol protocolHandshakeResponse */
        protocolHandshakeResponse?: (routing.IProtocolHandshakeResponse|null);

        /** Protocol packet */
        packet?: (routing.IPacket|null);

        /** Protocol disconnect */
        disconnect?: (routing.IDisconnect|null);
    }

    /** Represents a Protocol. */
    class Protocol implements IProtocol {

        /**
         * Constructs a new Protocol.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IProtocol);

        /** Protocol header. */
        public header?: (routing.IHeader|null);

        /** Protocol heartbeat. */
        public heartbeat?: (routing.IHeartbeat|null);

        /** Protocol protocolHandshake. */
        public protocolHandshake?: (routing.IProtocolHandshake|null);

        /** Protocol protocolHandshakeResponse. */
        public protocolHandshakeResponse?: (routing.IProtocolHandshakeResponse|null);

        /** Protocol packet. */
        public packet?: (routing.IPacket|null);

        /** Protocol disconnect. */
        public disconnect?: (routing.IDisconnect|null);

        /** Protocol message. */
        public message?: ("heartbeat"|"protocolHandshake"|"protocolHandshakeResponse"|"packet"|"disconnect");

        /**
         * Creates a new Protocol instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Protocol instance
         */
        public static create(properties?: routing.IProtocol): routing.Protocol;

        /**
         * Encodes the specified Protocol message. Does not implicitly {@link routing.Protocol.verify|verify} messages.
         * @param message Protocol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Protocol message, length delimited. Does not implicitly {@link routing.Protocol.verify|verify} messages.
         * @param message Protocol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Protocol message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Protocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Protocol;

        /**
         * Decodes a Protocol message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Protocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Protocol;

        /**
         * Verifies a Protocol message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Protocol
         */
        public static fromObject(object: { [k: string]: any }): routing.Protocol;

        /**
         * Creates a plain object from a Protocol message. Also converts values to other types if specified.
         * @param message Protocol
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Protocol to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a TransportLayer */
    class TransportLayer extends $protobuf.rpc.Service {

        /**
         * Constructs a new TransportLayer service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TransportLayer service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TransportLayer;

        /**
         * Calls Send.
         * @param request TLRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TLResponse
         */
        public send(request: routing.ITLRequest, callback: routing.TransportLayer.SendCallback): void;

        /**
         * Calls Send.
         * @param request TLRequest message or plain object
         * @returns Promise
         */
        public send(request: routing.ITLRequest): Promise<routing.TLResponse>;

        /**
         * Calls Stream.
         * @param request Chunk message or plain object
         * @param callback Node-style callback called with the error, if any, and TLResponse
         */
        public stream(request: routing.IChunk, callback: routing.TransportLayer.StreamCallback): void;

        /**
         * Calls Stream.
         * @param request Chunk message or plain object
         * @returns Promise
         */
        public stream(request: routing.IChunk): Promise<routing.TLResponse>;
    }

    namespace TransportLayer {

        /**
         * Callback as used by {@link routing.TransportLayer#send}.
         * @param error Error, if any
         * @param [response] TLResponse
         */
        type SendCallback = (error: (Error|null), response?: routing.TLResponse) => void;

        /**
         * Callback as used by {@link routing.TransportLayer#stream}.
         * @param error Error, if any
         * @param [response] TLResponse
         */
        type StreamCallback = (error: (Error|null), response?: routing.TLResponse) => void;
    }

    /** Properties of a TLRequest. */
    interface ITLRequest {

        /** TLRequest protocol */
        protocol?: (routing.IProtocol|null);
    }

    /** Represents a TLRequest. */
    class TLRequest implements ITLRequest {

        /**
         * Constructs a new TLRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.ITLRequest);

        /** TLRequest protocol. */
        public protocol?: (routing.IProtocol|null);

        /**
         * Creates a new TLRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TLRequest instance
         */
        public static create(properties?: routing.ITLRequest): routing.TLRequest;

        /**
         * Encodes the specified TLRequest message. Does not implicitly {@link routing.TLRequest.verify|verify} messages.
         * @param message TLRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.ITLRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TLRequest message, length delimited. Does not implicitly {@link routing.TLRequest.verify|verify} messages.
         * @param message TLRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.ITLRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TLRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TLRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.TLRequest;

        /**
         * Decodes a TLRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TLRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.TLRequest;

        /**
         * Verifies a TLRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TLRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TLRequest
         */
        public static fromObject(object: { [k: string]: any }): routing.TLRequest;

        /**
         * Creates a plain object from a TLRequest message. Also converts values to other types if specified.
         * @param message TLRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.TLRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TLRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InternalServerError. */
    interface IInternalServerError {

        /** InternalServerError error */
        error?: (Uint8Array|null);
    }

    /** Represents an InternalServerError. */
    class InternalServerError implements IInternalServerError {

        /**
         * Constructs a new InternalServerError.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IInternalServerError);

        /** InternalServerError error. */
        public error: Uint8Array;

        /**
         * Creates a new InternalServerError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InternalServerError instance
         */
        public static create(properties?: routing.IInternalServerError): routing.InternalServerError;

        /**
         * Encodes the specified InternalServerError message. Does not implicitly {@link routing.InternalServerError.verify|verify} messages.
         * @param message InternalServerError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IInternalServerError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InternalServerError message, length delimited. Does not implicitly {@link routing.InternalServerError.verify|verify} messages.
         * @param message InternalServerError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IInternalServerError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InternalServerError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InternalServerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.InternalServerError;

        /**
         * Decodes an InternalServerError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InternalServerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.InternalServerError;

        /**
         * Verifies an InternalServerError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InternalServerError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InternalServerError
         */
        public static fromObject(object: { [k: string]: any }): routing.InternalServerError;

        /**
         * Creates a plain object from an InternalServerError message. Also converts values to other types if specified.
         * @param message InternalServerError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.InternalServerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InternalServerError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Ack. */
    interface IAck {

        /** Ack header */
        header?: (routing.IHeader|null);
    }

    /** Represents an Ack. */
    class Ack implements IAck {

        /**
         * Constructs a new Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IAck);

        /** Ack header. */
        public header?: (routing.IHeader|null);

        /**
         * Creates a new Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ack instance
         */
        public static create(properties?: routing.IAck): routing.Ack;

        /**
         * Encodes the specified Ack message. Does not implicitly {@link routing.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ack message, length delimited. Does not implicitly {@link routing.Ack.verify|verify} messages.
         * @param message Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Ack;

        /**
         * Decodes an Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Ack;

        /**
         * Verifies an Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ack
         */
        public static fromObject(object: { [k: string]: any }): routing.Ack;

        /**
         * Creates a plain object from an Ack message. Also converts values to other types if specified.
         * @param message Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TLResponse. */
    interface ITLResponse {

        /** TLResponse ack */
        ack?: (routing.IAck|null);

        /** TLResponse internalServerError */
        internalServerError?: (routing.IInternalServerError|null);
    }

    /** Represents a TLResponse. */
    class TLResponse implements ITLResponse {

        /**
         * Constructs a new TLResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.ITLResponse);

        /** TLResponse ack. */
        public ack?: (routing.IAck|null);

        /** TLResponse internalServerError. */
        public internalServerError?: (routing.IInternalServerError|null);

        /** TLResponse payload. */
        public payload?: ("ack"|"internalServerError");

        /**
         * Creates a new TLResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TLResponse instance
         */
        public static create(properties?: routing.ITLResponse): routing.TLResponse;

        /**
         * Encodes the specified TLResponse message. Does not implicitly {@link routing.TLResponse.verify|verify} messages.
         * @param message TLResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.ITLResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TLResponse message, length delimited. Does not implicitly {@link routing.TLResponse.verify|verify} messages.
         * @param message TLResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.ITLResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TLResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TLResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.TLResponse;

        /**
         * Decodes a TLResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TLResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.TLResponse;

        /**
         * Verifies a TLResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TLResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TLResponse
         */
        public static fromObject(object: { [k: string]: any }): routing.TLResponse;

        /**
         * Creates a plain object from a TLResponse message. Also converts values to other types if specified.
         * @param message TLResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.TLResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TLResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChunkHeader. */
    interface IChunkHeader {

        /** ChunkHeader sender */
        sender?: (routing.INode|null);

        /** ChunkHeader typeId */
        typeId?: (string|null);

        /** ChunkHeader compressed */
        compressed?: (boolean|null);

        /** ChunkHeader contentLength */
        contentLength?: (number|null);

        /** ChunkHeader networkId */
        networkId?: (string|null);
    }

    /** Represents a ChunkHeader. */
    class ChunkHeader implements IChunkHeader {

        /**
         * Constructs a new ChunkHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IChunkHeader);

        /** ChunkHeader sender. */
        public sender?: (routing.INode|null);

        /** ChunkHeader typeId. */
        public typeId: string;

        /** ChunkHeader compressed. */
        public compressed: boolean;

        /** ChunkHeader contentLength. */
        public contentLength: number;

        /** ChunkHeader networkId. */
        public networkId: string;

        /**
         * Creates a new ChunkHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunkHeader instance
         */
        public static create(properties?: routing.IChunkHeader): routing.ChunkHeader;

        /**
         * Encodes the specified ChunkHeader message. Does not implicitly {@link routing.ChunkHeader.verify|verify} messages.
         * @param message ChunkHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IChunkHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChunkHeader message, length delimited. Does not implicitly {@link routing.ChunkHeader.verify|verify} messages.
         * @param message ChunkHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IChunkHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunkHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunkHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.ChunkHeader;

        /**
         * Decodes a ChunkHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChunkHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.ChunkHeader;

        /**
         * Verifies a ChunkHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChunkHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChunkHeader
         */
        public static fromObject(object: { [k: string]: any }): routing.ChunkHeader;

        /**
         * Creates a plain object from a ChunkHeader message. Also converts values to other types if specified.
         * @param message ChunkHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.ChunkHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChunkHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChunkData. */
    interface IChunkData {

        /** ChunkData contentData */
        contentData?: (Uint8Array|null);
    }

    /** Represents a ChunkData. */
    class ChunkData implements IChunkData {

        /**
         * Constructs a new ChunkData.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IChunkData);

        /** ChunkData contentData. */
        public contentData: Uint8Array;

        /**
         * Creates a new ChunkData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunkData instance
         */
        public static create(properties?: routing.IChunkData): routing.ChunkData;

        /**
         * Encodes the specified ChunkData message. Does not implicitly {@link routing.ChunkData.verify|verify} messages.
         * @param message ChunkData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IChunkData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChunkData message, length delimited. Does not implicitly {@link routing.ChunkData.verify|verify} messages.
         * @param message ChunkData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IChunkData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunkData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunkData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.ChunkData;

        /**
         * Decodes a ChunkData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChunkData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.ChunkData;

        /**
         * Verifies a ChunkData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChunkData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChunkData
         */
        public static fromObject(object: { [k: string]: any }): routing.ChunkData;

        /**
         * Creates a plain object from a ChunkData message. Also converts values to other types if specified.
         * @param message ChunkData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.ChunkData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChunkData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chunk. */
    interface IChunk {

        /** Chunk header */
        header?: (routing.IChunkHeader|null);

        /** Chunk data */
        data?: (routing.IChunkData|null);
    }

    /** Represents a Chunk. */
    class Chunk implements IChunk {

        /**
         * Constructs a new Chunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: routing.IChunk);

        /** Chunk header. */
        public header?: (routing.IChunkHeader|null);

        /** Chunk data. */
        public data?: (routing.IChunkData|null);

        /** Chunk content. */
        public content?: ("header"|"data");

        /**
         * Creates a new Chunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chunk instance
         */
        public static create(properties?: routing.IChunk): routing.Chunk;

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link routing.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routing.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link routing.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routing.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing.Chunk;

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing.Chunk;

        /**
         * Verifies a Chunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chunk
         */
        public static fromObject(object: { [k: string]: any }): routing.Chunk;

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @param message Chunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routing.Chunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
