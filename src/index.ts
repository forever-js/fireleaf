interface Logger {
    debug(message?: string | object): void;
    // info(message?: string | object): void;
    // warn(message?: string | object): void;
    // error(message?: string | object): void;
}

type FireLeafOptions = {
    context: number,
    logger?: Logger,
};

class DatasourceFactory {
  #logger;

  constructor(logger?: Logger) {
    this.#logger = logger;
  }

  createDataSource(collection: object): object {
    const ds = Object.assign(collection, this.#logger, { hello: 'world' });
    return ds;
  }
}

export default function FireLeaf(options: FireLeafOptions) {
  return new DatasourceFactory(options.logger);
}
